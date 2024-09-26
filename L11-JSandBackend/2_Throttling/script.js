function throttling(cb, delay) {
    let isCalled = false;
    
    return function () {
        if (!isCalled) {
            isCalled=true;
            cb();
            setTimeout(() => {
                isCalled = false;
            }, delay);
        }
    }
}

document.querySelector('#btn').addEventListener('click', throttling(() => {
    console.log("Value you entered", document.querySelector('#inp').value);
}, 5000));
