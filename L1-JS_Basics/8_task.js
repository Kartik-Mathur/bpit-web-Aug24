let url = "https://codingblocks.com/movies/dsa.mp4";

// Create an Object from the url
/*
{
    "codingblocks.com":{
        movies: ["dsa.mp4","web.mp4"]
    }
}
*/

let newObj = {};
const arr = url.split('/');
// console.log(arr);

const company = arr[2];
const category = arr[3];
const item = arr[4];
// newObj={}
// newObj mei company key present hai ya nahi, lets check it
if(!newObj[company]){
    newObj[company] = {}
}
console.log(newObj);
// newObj = {
//     "codingblocks.com":{}
// }
// category insert karo inside company
if(!newObj[company][category]){
    newObj[company][category] = []
}

newObj[company][category].push(item);
console.log(newObj);