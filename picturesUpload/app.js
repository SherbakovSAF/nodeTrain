const http = require('http');
const path = require('path');
const fs = require('fs');

const httplserver = http.createServer((req,res)=>{
     console.log(req.url)
     if(req.url === '/'){
          sendRes('index.html', 'text/html', res)
     }else {
          sendRes(req.url, getContentType(req.url) ,res)
     }

}).listen(3000, ()=>{
     console.log('node.js 3000')
})

function sendRes(url, contentType, res){
     let file = path.join(__dirname, url)
     fs.readFile(file, (err, content) =>{
          if(err){
               res.writeHead(404);
               res.write('file not found')
               res.end()
               console.log('error 404')
          } else {
               res.writeHead(200, {'Content-Type': contentType});
               res.write(content)
               res.end()
               console.log('200')
          }
     })
}


function getContentType(url){
     switch(path.extname(url)){
          case '.html':
               return 'text/html'
          case '.css':
               return 'text/css'
          case '.js':
               return 'text/javascript'
          case '.json':
               return 'application/json'
          default:
               return 'application/octate-stream'
     }
}