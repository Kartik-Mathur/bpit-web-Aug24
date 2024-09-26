let arr = [1, 2, 3, 4];

Array.prototype.myreduce = function (cb, initial_val) {
    // cb=(acc, v, i, arr) => {
    //     return acc + v;
    // }
    let arr = this;
    let start;
    let acc;
    (initial_val != undefined) ? (acc=initial_val, start = 0) : (acc=arr[0], start = 1);
    
    for (let i = start; i < arr.length; i++) {
        acc = cb(acc, arr[i], i, arr);
    }
    return acc;
}

let sum = arr.myreduce((acc, v, i, arr) => {
    return acc * v;
}, 1)

console.log(sum);