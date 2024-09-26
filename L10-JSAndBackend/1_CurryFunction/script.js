function add(num) {
    if(!num) return 0;
    let sum=num;
    return function addHelper(no){
        if(!no) return sum;

        sum+=no;
        return addHelper;
    }
}


console.log(add(1)());
console.log(add(1)(2)());
console.log(add(1)(2)(3)());
console.log(add(1)(2)(3)(4)());
console.log(add(1)(2)(3)(4)(5)());