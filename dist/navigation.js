// Touch navigation uses the same land boundaries and building clearance as movement.
export function findWalkingPath(start,target,{originX,builder=false,bridgeCount=3,colliders=[]}){
 const minX=originX-33,maxX=originX+33,minZ=-65,maxZ=builder?49:6;
 const free=(x,z)=>{
  if(x<minX||x>maxX||z<minZ||z>maxZ)return false;
  if(builder&&z>6&&z<34&&(Math.abs(x-originX)>1.8||z>6+bridgeCount*4))return false;
  if(builder&&z>=34&&Math.abs(x-originX)>9)return false;
  return !colliders.some(b=>Math.abs(x-b.x)<b.w/2+.6&&Math.abs(z-b.z)<b.d/2+.6);
 };
 if(!Number.isFinite(target.x)||!Number.isFinite(target.z)||!free(target.x,target.z))return null;
 const snap=p=>{const x=Math.round(p.x),z=Math.round(p.z);if(free(x,z))return {x,z};let best=null,dist=Infinity;for(let dx=-2;dx<=2;dx++)for(let dz=-2;dz<=2;dz++){const d=Math.hypot(x+dx-p.x,z+dz-p.z);if(d<dist&&free(x+dx,z+dz)){best={x:x+dx,z:z+dz};dist=d;}}return best;};
 const from=snap(start),to=snap(target);if(!from||!to)return null;
 const key=(x,z)=>`${x},${z}`,startKey=key(from.x,from.z),endKey=key(to.x,to.z);
 const queue=[from],parents=new Map([[startKey,null]]);let index=0;
 while(index<queue.length){const cell=queue[index++],k=key(cell.x,cell.z);if(k===endKey){const path=[];let cursor=k;while(cursor!==null){const [x,z]=cursor.split(',').map(Number);path.push({x,z});cursor=parents.get(cursor);}path.reverse();path.push({x:target.x,z:target.z});return path;}
  for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const x=cell.x+dx,z=cell.z+dz,next=key(x,z);if(parents.has(next)||!free(x,z))continue;if(dx&&dz&&(!free(cell.x+dx,cell.z)||!free(cell.x,cell.z+dz)))continue;parents.set(next,k);queue.push({x,z});}
 }
 return null;
}
