//在JS中，不存在class概念，对于对象的私有成员变量可以通过闭包的方式
//所谓闭包就是返回一个函数，此函数引用了主体函数中的局部变量或参数
//这样对外无法访问函数局部变量，而通过返回的函数可以访问

function make_counter(x)
{
    var start = x || 0;
    return {
        inc: function(){
            start++;
            return start;
        }
    }
}
var c = make_counter();
c.inc();

function make_power(n)
{
    return {zhi:function(x)
        {
            return Math.pow(n,x);
        },
        mi: function(x)
        {
            return Math.pow(x,n);
        }
    }
}

pow_2 = make_power(2);
console.log(pow_2.zhi(10),pow_2.mi(10));

