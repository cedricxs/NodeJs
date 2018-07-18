//express框架:接受请求->响应
//req res{write(),send()向前台发送数据功能更强大,end()}

const express = require('express');
const expressstatic = require('express-static')
//创建服务；
var server = express();
//use 为服务器添加响应；'/'为客户访问目录；
//３种接受用户请求的方法：{get('adr',fun)接收get请求,post('adr',fun)接收post请求,use('adr',fun)都可接收}
server.use('/a.html',function(req,res){
res.send('abc');
res.end();
});
server.use('/b.html',function(req,res){
res.send('123');
res.end();
});
server.get('/',function(req,res){
console.log(req.query);
res.end();
});
server.post('/',function(req,res){
    console.log('post');
    res.end();
    });
//端口监听；
server.listen(8080);
server.use(expressstatic('./www'));