const express = require('express');

const cookies = require('cookie-parser');

const cookiesession = require('cookie-session');
var server = express();

server.listen(8080);

/*server.use(cookies('asd'//签名字符串));

server.use('/',function(req,res){
    res.cookie('hhh2','kkk',{signed:true});给用户发送cookie,保存在res中
    console.log(req.signedCookies);
    console.log(req.cookies);
    res.send('ok');
})*/
//session可以判断某个用户登录次数;session-value是session_id用于识别用户;
server.use(cookies());
server.use(cookiesession({name:'cedricxs',keys:['a','b','c']}));
server.use('/',function(req,res){
    if(req.session['count']==null){　　//session保存在req中
       req.session['count']=1;
    }
    else req.session['count']++;
    console.log(req.session);
    res.send('ok');
})