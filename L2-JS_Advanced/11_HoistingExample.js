var x = 10;

function fun() {
    console.log(x);

    var x = 200;
    console.log(x);
}
fun();
var y = 20;

if (y > 0) {
    console.log(y);
    var y = 30;
    console.log(y);
}

console.log(x);
console.log(y);

