const fs = require('fs');
const http = require('http');
const path = require('path');
const mime = require('mime')
//记录网站根目录
let rootPath = path.join(__dirname, 'WWW');
console.log(rootPath);
//创建服务器
let server = http.createServer((request, response) => {
    //生成地址
    let targetPath = path.join(rootPath, request.url);
    console.log(targetPath);
    //判断路径是否存在
    if (fs.existsSync(targetPath)) {
        //文件还是文件夹
        fs.stat(targetPath, (err, stats) => {
            if (stats.isFile()) {
                response.setHeader('content-type', mime.getType(targetPath));
                fs.readFile(targetPath, (err, data) => {
                    response.end(data);
                })
            }
            if(stats.isDirectory()){//如果是目录
                //读取文件夹信息
                fs.readdir(targetPath,(err,files)=>{
                    let tem='';
                    console.log(request.url);
                    //遍历files
                    for (let i = 0; i < files.length; i++) {
                        tem+=`
                        <li>
                             <a href="${request.url}${request.url=='/'?'':'/'}${files[i]}">${files[i]}</a>
                        </li>
                        `;
                        
                    }
                    response.end(`
                    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
              <html>
              
              <head>
                  <title>Index of/ </title>
              </head>
              
              <body>
                  <h1>Index of${request.url}</h1>
                  <ul>
                      ${tem}
                  </ul>
              </body>
              
              </html>
                    `)
                })
            }
            
        })

    } else {//不存在
        response.statusCode = 404;
        response.setHeader('content-type', 'text/html;charset=utf-8');
        response.end(`
        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
              <html>
              
              <head>
                  <title>Index of/ </title>
              </head>
              
              <body>
                  <h1>Index of /</h1>
                  <ul>
                      ${tem}
                  </ul>
              </body>
              
              </html>
        `)

    }
})


//开启服务器
server.listen(8848, '127.0.0.1', () => {
    console.log('开启成功');

})