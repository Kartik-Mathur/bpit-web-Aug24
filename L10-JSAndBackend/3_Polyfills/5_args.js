function add(a, b, ...args) {
    let sum = a+b;
    args.forEach((i) => sum += i);
    return sum;
}

console.log(add(1, 2, 3, 4));