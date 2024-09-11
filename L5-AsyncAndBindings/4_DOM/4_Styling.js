let heading = document.querySelector('#heading');
let body = document.querySelector('body');
// heading.style.backgroundColor='orange';
// heading.style.color='white';
// heading.style.fontSize='40px';
console.log(heading.classList)
// heading.classList.add('heading');
// heading.classList.remove('heading');
let id = setInterval(() => {
    // heading.classList.toggle('heading');
    body.classList.toggle('heading');
}, 10);

setTimeout(()=>{
    clearInterval(id);
},5000);