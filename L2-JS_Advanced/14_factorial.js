function fact(n) {
    if (n == 0) return 1;
    return n * fact(n - 1);
}

let ans = fact(5);
console.log(ans);