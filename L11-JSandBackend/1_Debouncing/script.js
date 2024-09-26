function debounce(cb, delay) {
    // cb=() => {
    //     console.log("Scrolling");
    // }
    let timer;
    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            cb();
        }, delay);
    }
}

window.addEventListener('scroll', debounce(() => {
    console.log("Scrolling");
}, 300));

document.querySelector('#inp').addEventListener('keydown', debounce(() => {
    console.log("Value you entered",document.querySelector('#inp').value);
}, 1000));
// document.querySelector('#inp').addEventListener('keydown', () => {
//     console.log("Value you entered",document.querySelector('#inp').value);
// });