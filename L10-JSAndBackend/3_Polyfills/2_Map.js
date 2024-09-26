let arr = [1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.mymap = function (cb) {
    // cb=(val, indx, arr) => {
    //     // console.log("Val", val, "Index", indx, "arr", arr);
    //     return val * val;
    // }
    let arr = this;
    let new_array=[];
    for (let i = 0; i < arr.length; i++) {
        new_array.push(cb(arr[i],i,arr))
    }
    return new_array;
}

let newArr = arr.mymap((val, indx, arr) => {
    // console.log("Val", val, "Index", indx, "arr", arr);
    return val * val;
})

console.log(newArr);