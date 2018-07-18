const json = require('querystring');

module.exports=function()
{
    return function(req,res,next){
    var str = '';
    
    req.on('data',function(data){
        str+=data;
        console.log(str+data)
    });
    req.on('end',function(){
        req.a=json.parse(str);console.log(req);
        next();
    });
}
}