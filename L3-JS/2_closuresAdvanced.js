function funGen() {
    let a = 1;
    function outerFun() {
        a++;
        function innerFun() {
            a++;
            console.log(a);
        }
        return innerFun;
    }
    return outerFun;
}

let f=funGen();
let f1=f();
f1()
f1()
f1()

let f2=f();
f2()
f2()
f2()