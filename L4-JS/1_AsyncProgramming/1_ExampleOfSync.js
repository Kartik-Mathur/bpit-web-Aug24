function delayASec() {
    let currentTime = new Date().getTime();
    while (new Date().getTime() - currentTime < 1000) {
        // wait
    }
}

function delayNSec(n) {
    for (let i = 0; i < n; i++) {
        delayASec();
    }
}

delayNSec(5);

console.log("Hello World");