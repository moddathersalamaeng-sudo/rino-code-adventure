const fs=require('node:fs'),path=require('node:path');
const files=['index.html','style.css','activities.js','world.js','navigation.js','touch-controls.js','assets/rino-portrait.jpg','vendor/three.module.js','vendor/three.core.js','vendor/LICENSE'];
for(const file of files){const dest=path.join(__dirname,'dist',file);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.copyFileSync(path.join(__dirname,file),dest);}
console.log('Static build ready in dist/');
