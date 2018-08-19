var test = function*(n){
    if(n==1)return [0];
    var arr = [0,1];
    var i = 2;
    do{
        arr.push(arr[i-2]+arr[i-1]);
        i++;
        yield arr;
    }while (i<n);
}
var gen = test(10);

var f = function (gen) {return gen.next()};

for(var i = 1;i<10;i++)
    console.log(f(gen));

for(var x of test(5))
    //console.log(x)
'use strict'
function* next_id() {
for(var x = 1; x<100 ; x++)
    yield x;
}

// 测试:
var
    x,
    pass = true,
    g = next_id();
for (x = 1; x < 100; x ++) {
    var step = g.next().value;
    console.log(step)
    if (step !== x) {
        pass = false;
        console.log('测试失败!');
        break;
    }
}
if (pass) {
    console.log('测试通过!');
}













