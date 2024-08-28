const timeSeAaunga = new Promise((resolve, reject) => {
    let timeSeClassAaya = false;
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
    })
    .catch((errMsg) => {
        console.log(errMsg)
    });

