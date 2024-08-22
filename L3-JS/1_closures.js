function newCounter() {
    let cnt = 0;

    function updateCounter() {
        cnt++;
        return cnt;
    }
    return updateCounter;
}

let c = function updateCounter() {
    cnt++;
    return cnt;
}

console.log(c());
console.log(c());
console.log(c());
console.log(c());

let c1 = newCounter();
console.log(c1());
console.log(c1());
console.log(c1());
console.log(c1());