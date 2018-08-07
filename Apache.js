

const http=require('http');
const fs=require('fs');
const path=require('path');

//创建服务器
let server=http.createServer((request,response)=>{
    response.end('hello'); 
})
let rootpath=path.join(__dirname,'WWW');;
console.log(path);
//监听
server.listen(3000,('127.0.0.1'),()=>{
console.log('监听成功');
})