const express = require('express');
//引入中间件express-static用以读取静态文件；
const expressstatic = require('express-static');

var server = express();

server.listen(8081);
var users = {'cedricxs':'123',
            'aline':'234'};
server.get('/login',function(req,res){
    var user = req.query['user'];
    var pass = req.query['pass'];
    if(users[user]==null){
        res.send({ok:false,message:'此用户不存在'});
    }
    else if(users[user]!=pass) {
        res.send({ok:false,message:'密码错误'});
    }
    else res.send({ok:true,message:'登录成功'})
});
//读取静态文件的目录；

server.get('/',function(req,res){
 var user = req.query['user'];
 var pass = req.query['pass'];
 if(users[user]==null){
     res.send('此用户不存在');
 }
 else if(users[user]!=pass){
     res.send('密码错误');
 }
 else res.send('登陆成功');
res.end();
});
//静态文件路由必须写在动态后面，不然会现在静态路由中找文件
server.use(expressstatic('./www'));