let id = setInterval(() => {
    console.log("Hello World Learing Set Iterval");
}, 10);

setTimeout(() => {
    clearInterval(id);
}, 5000);

