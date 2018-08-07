//fs模块读取文件
const http=require('http');
const fs=require('fs');
const path=require('path');

//记录绝对路径
let rootPath=path.join(__dirname,'WWW');

//创建服务器
let server=http.createServer((request,response)=>{
    //设置响应头的编码
    response.setHeader('content-type','text/html;charset=utf-8');
    response.end(`
    洞庭张乐地，潇湘帝子游。
云去苍梧野，水还江汉流。
停骖我怅望，辍棹子夷犹。
广平听方籍，茂陵将见求。
心事俱己矣，江上徒离忧。
    `);
})
//开启服务器
server.listen(8848,('127.0.0.1'),()=>{
    console.log('开启成功');
})
