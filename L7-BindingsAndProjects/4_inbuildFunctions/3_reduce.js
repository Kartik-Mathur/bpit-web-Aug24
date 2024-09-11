let arr = [
    1, 2, 3, 4, 5
]

// let sum = arr.reduce((acc,val,indx,arr)=>{
//     console.log(acc,val);
//     return acc+val;
// })

let sum = arr.reduce((acc,val,indx,arr)=>{
    console.log(acc,val);
    return acc+val;
}, 0)

console.log(sum);