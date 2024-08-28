function classTimeSeAaunga() {
    return new Promise((resolve, reject) => {
        let timeSeClassAaya = true;
        console.log("running promise")
        if (timeSeClassAaya) {
            resolve("Aaja class ke andar! Good Boi");
        }
        else {
            reject("Nikal ghar ko! Nirlaj!");
        }
    });
}

let classTimeKaPromise = classTimeSeAaunga();

setTimeout(() => {
    classTimeKaPromise
        .then((msg) => {
            console.log(msg);
        })
        .catch((errMsg) => {
            console.log(errMsg);
        })
}, 3000);