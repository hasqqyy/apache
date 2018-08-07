//fs模块读取文件
const http = require('http');
const fs = require('fs');
const path = require('path');

//记录绝对路径
let rootPath = path.join(__dirname, 'WWW');

//创建服务器
let server = http.createServer((request, response) => {
    //生成地址
    let targetPath = path.join(rootPath, request.url);
    //判断路径是否存在
    if (fs.existsSync(targetPath)) {
        //判断是不是文件
        response.end('hello')
        let stats = fs.stat(targetPath);
    } else {
        //设置响应头的编码
        response.setHeader('content-type', 'text/html;charset=utf-8');
        //设置状态码
        response.statusCode = 404;
        response.end(`
        <!DOCTYPE html>
            <html lang="en">

            <head></head>
            <title>404 Not Found</title>
            <body>
                    <h1>Not Found</h1>
                    <p>你请求的${request.url}不在服务器上哦,检查一下呗</p>
            </body>

            </html>
        `)
    }
})
//开启服务器
server.listen(8848, ('127.0.0.1'), () => {
    console.log('开启成功');
})
