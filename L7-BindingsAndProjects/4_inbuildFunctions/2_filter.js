let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
];

let newArr = arr.filter((val,indx,arr)=>{
    if(val%2 == 0) return true;
    return false;
})

console.log(newArr);