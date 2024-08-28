const timeSeAaunga = new Promise((resolve, reject) => {
    let timeSeClassAaya = true;
    if (timeSeClassAaya) {
        resolve("Aaja class ke andar! Good Boi");
    }
    else {
        reject("Nikal ghar ko! Nirlaj!");
    }
});

timeSeAaunga
    .then((msg) => {
        console.log(msg)
        return "Hello";
    })
    .then((msg) => {
        console.log(msg)
        return "World";
    })
    .then((msg) => {
        console.log(msg)
    })
    .catch((errMsg) => {
        console.log(errMsg)
    });

