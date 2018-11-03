//模板引擎：渲染页面（动态页面）->jade/ejs
//jade->破坏式、侵入式、强依赖：1.根据缩进判别子集2.属性放括号内3.内容放在一个空格后
//ejs->非侵入式的、弱依赖 
const jade = require('jade');
const ejs = require('ejs');
const fs = require('fs');
arr=['a','b','c','d'];
var str = jade.renderFile('./jade&ejs/views/1.jade',{pretty:true,name:'cedricxs',aa:arr});

console.log(str);

ejs.renderFile('./jade&ejs/views/1.ejs',{name :'cedricxs'},function(err,data){
    if(err)console.log('编译失败');
    else {
        fs.writeFile('./jade&ejs/b.html',data,function(err){
            if(err)console.log('error');
            else console.log('success');
            });
    }
});
fs.writeFile('./jade&ejs/a.html',str,function(err){
    if(err)console.log('error');
    else console.log('success');
    });

