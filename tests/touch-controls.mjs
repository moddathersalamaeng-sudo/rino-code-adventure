import assert from 'node:assert/strict';
import {bindSceneInput} from '../touch-controls.js';
function fixture(pointer=true){const handlers={},calls={targets:[],rotations:[]};const canvas={addEventListener(name,fn){handlers[name]=fn;},setPointerCapture(){}};bindSceneInput(canvas,{onTarget:e=>calls.targets.push([e.clientX,e.clientY]),onRotate:x=>calls.rotations.push(x),onFocus(){}},pointer);const emit=(type,values={})=>handlers[type]({pointerId:1,isPrimary:true,button:0,clientX:100,clientY:100,timeStamp:10,preventDefault(){},...values});return {emit,calls};}
const touch=fixture();touch.emit('pointerdown',{pointerType:'touch'});assert.equal(touch.calls.targets.length,1,'Android movement must begin before finger lift');touch.emit('pointermove',{pointerType:'touch',clientX:114,timeStamp:35});touch.emit('pointerup',{pointerType:'touch',clientX:114,timeStamp:45});assert.equal(touch.calls.targets.length,1);assert.equal(touch.calls.rotations.length,0,'14px finger drift must not rotate or cancel');
const cancel=fixture();cancel.emit('pointerdown',{pointerType:'touch'});cancel.emit('pointercancel');assert.equal(cancel.calls.targets.length,1,'Chrome cancellation must preserve accepted destination');
const drag=fixture();drag.emit('pointerdown',{pointerType:'mouse'});drag.emit('pointermove',{pointerType:'mouse',clientX:130});drag.emit('pointerup',{pointerType:'mouse',clientX:130});assert.equal(drag.calls.targets.length,0);assert(drag.calls.rotations.length>0,'desktop camera drag still works');
const click=fixture();click.emit('pointerdown',{pointerType:'mouse'});click.emit('pointerup',{pointerType:'mouse'});assert.equal(click.calls.targets.length,1);
const fallback=fixture(false);fallback.emit('touchstart',{touches:[{clientX:120,clientY:140}]});assert.equal(fallback.calls.targets.length,1);
console.log('Android touch-down, finger drift, cancellation, desktop click/drag and touch fallback passed.');

