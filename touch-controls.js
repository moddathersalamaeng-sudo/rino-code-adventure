// A finger starts movement immediately; small finger drift is not a camera drag.
export function bindSceneInput(canvas,{onTarget,onRotate,onFocus,isCameraMode=()=>false},supportsPointer=typeof PointerEvent!=='undefined'){
 let gesture=null;
 const capture=e=>{try{canvas.setPointerCapture(e.pointerId);}catch{}};
 if(supportsPointer){
  canvas.addEventListener('pointerdown',e=>{if(e.isPrimary===false||e.button>0)return;const finger=e.pointerType==='touch'||e.pointerType==='pen',rotate=finger&&isCameraMode(),touch=finger&&!rotate;gesture={id:e.pointerId,x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,lastTime:e.timeStamp||0,touch,rotate,moved:false};onFocus();capture(e);if(finger)e.preventDefault();if(touch)onTarget(e);},{passive:false});
  canvas.addEventListener('pointermove',e=>{if(!gesture||gesture.id!==e.pointerId)return;const g=gesture;if(g.touch){e.preventDefault();if(Math.hypot(e.clientX-g.lastX,e.clientY-g.lastY)>5&&(e.timeStamp-g.lastTime)>80){g.lastX=e.clientX;g.lastY=e.clientY;g.lastTime=e.timeStamp;onTarget(e);}return;}if(g.rotate)e.preventDefault();if(Math.hypot(e.clientX-g.x,e.clientY-g.y)>8)g.moved=true;if(g.moved){onRotate(e.clientX-g.lastX);g.lastX=e.clientX;}},{passive:false});
  canvas.addEventListener('pointerup',e=>{if(!gesture||gesture.id!==e.pointerId)return;const g=gesture;gesture=null;if(!g.touch&&!g.rotate&&!g.moved&&Math.hypot(e.clientX-g.x,e.clientY-g.y)<=8)onTarget(e);});
  // Chrome may cancel capture while ending a touch. Keep its already accepted goal.
  for(const event of ['pointercancel','lostpointercapture'])canvas.addEventListener(event,()=>gesture=null);
 }else{
  const target=e=>{if(e.touches.length!==1)return;e.preventDefault();onFocus();onTarget(e.touches[0]);};
  canvas.addEventListener('touchstart',target,{passive:false});canvas.addEventListener('touchmove',target,{passive:false});
 }
}
