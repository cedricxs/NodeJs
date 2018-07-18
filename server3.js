const express = require('express')
const bodyparser = require('body-parser')
const mybodyparser = require('./mybodyparser')

var server = express();

server.listen(8080);
//对于use同一地址产生的链式操作时，需要next来控制是否进行下一步操作！
//req.query->get 无需中间件
//req.body->post　需要body-parser中间件，并且先解析body,链式操作，多个use先后处理post数据

server.use(bodyparser.urlencoded({}));

server.use('/',function(req,res){
   console.log(req.body);
   res.end();
});

server.use(mybodyparser());
server.use('/',function(req,res,next){
    console.log(req.a);
    next();
});

server.use('/',function(req,res,next){
    console.log('b');
});
