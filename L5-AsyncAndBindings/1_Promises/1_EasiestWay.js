let p = Promise.resolve("Hello");

p.then(msg => {
    console.log(msg);
})