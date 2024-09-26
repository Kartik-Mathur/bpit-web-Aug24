// Async JS and XML
const xhr = new XMLHttpRequest();

const url = 'https://cat-fact.herokuapp.com/facts';
// URL setup krna jaha request jaegi
xhr.open("GET", url);

// Yeh function chlega agr req. success hua
xhr.onload = function (data) {
    const newData=JSON.parse(data.currentTarget.response);
    console.log(newData);
}
// Yeh function chlega age req. error hua
xhr.onerror = function (err) {
    console.log(err)
}

// To trigger the request
xhr.send();