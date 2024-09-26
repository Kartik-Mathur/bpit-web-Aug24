let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Polyfill for filter function
Array.prototype.myfilter = function (cb) {
    // cb=(value, index, arr) => {
    //     // console.log("Val", value, "Index", index, "arr", arr);
    //     return value % 2 != 0;
    // }
    let arr = this;
    let new_array = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) new_array.push(arr[i])
    }
    return new_array;
}

let newArr = arr.myfilter((value, index, arr) => {
    // console.log("Val", value, "Index", index, "arr", arr);
    return value % 2 != 0;
});

console.log(newArr);