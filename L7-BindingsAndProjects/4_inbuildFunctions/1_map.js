let arr = [1, 2, 3, 4];

let newArr = arr.map((val, indx, arr) => {
    // console.log("Index", indx, "Value", val, "Arr", arr);
    return val*10
})

console.log(newArr);
console.log(arr);