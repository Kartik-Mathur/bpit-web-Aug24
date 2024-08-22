function funGen() {
    let a = 1;
    function outerFun() {
        a++;
        let b = 0;
        function innerFun() {
            a++;
            b++;
            console.log("a", a, "b", b);
        }
        return innerFun;
    }
    return outerFun;
}

let f = funGen();
let f1 = f();
f1()
f1()
f1()

let f2 = f();
f2()
f2()
f2()