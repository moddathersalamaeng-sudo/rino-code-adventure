const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const allowed=new Set(['index.html','style.css','activities.js','world.js','vendor/three.module.js','vendor/three.core.js']);
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8'};
http.createServer((req,res)=>{const file=(req.url||'/').split('?')[0].slice(1)||'index.html';if(!allowed.has(file)){res.writeHead(404);return res.end('Not found');}fs.readFile(path.join(__dirname,file),(err,data)=>{if(err){res.writeHead(500);return res.end('Read error');}res.writeHead(200,{'Content-Type':mime[path.extname(file)]});res.end(data);});}).listen(4173,'127.0.0.1',()=>console.log('http://localhost:4173'));
