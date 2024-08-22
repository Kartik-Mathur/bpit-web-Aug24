function newCounter() {
    let cnt = 0;

    function updateCounter() {
        cnt++;
        return cnt;
    }
    return updateCounter;
}

let c = newCounter();
let c1 = newCounter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());

console.log(c1());
console.log(c1());
console.log(c1());
console.log(c1());