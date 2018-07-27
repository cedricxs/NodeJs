//new Promise对象，Promise对象用于处理异步程序，
//构造的参数是param = resolve & reject 的函数，是异步程序内容，
//Promise不注重于到底执行的是哪一个函数，注重于自己的逻辑，即如果成功则执行resolve，如果失败则执行reject，
//Promise对象中用.then()/.catch()来分别执行成功或失败的回调函数，
//在JS中通常以callBack方式来执行异步嵌套过多，利用Promise将异步简化看起来像同步一样；
function test(resolve,reject)
{
    if(1>0.5)
    return resolve('yes');
    else return reject('small');
}
var p =new  Promise(test);
p.then(res=>{console.log(res);return new Promise(test)}).then(res=>{console.log(res)}).catch(reason=>{console.log(reason)});
//Promise.then(return Promise).then()...可以形成链式操作
function test2()
{
    return function(resolve,reject)
    {
        if(1===1){
            resolve(function(){console.log('yes!')})
        }
        else{
            reject(function(){console.log('no!')})
        }
    }
}
var p2 = new Promise(test2());
p2.then(res=>res()).catch(rea=>rea());
//异步执行可见虽然p2写在p1后面，但是由于p1执行了两个.then(),p1和p2为并行执行的异步程序，所以p2的输出结果插在了中间