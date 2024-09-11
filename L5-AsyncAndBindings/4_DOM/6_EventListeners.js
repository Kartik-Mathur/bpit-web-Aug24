let btn = document.querySelector('button');
let heading = document.querySelector('#heading');
// Events
/*
    - Keyboard
    - Mouse
    - Button
    - `Cursor: Enter and leave`
*/

// KEYBOARD EVENTS
// 1. keydown
// document.querySelector('body').addEventListener('keydown',(ev)=>{
//     console.log(ev.key)
// })

// 2. keyup
// document.querySelector('body').addEventListener('keyup',(ev)=>{
//     console.log(ev.key)
// })

// MOUSE EVENT
// 1. click
// document.querySelector('body').addEventListener('click',(ev)=>{
// console.log("Clicked");
// console.log(ev.target);
// })

// 2. dblclick
// document.querySelector('body').addEventListener('dblclick',(ev)=>{
//     console.log("Double Clicked");
// })

// 3. mouseover
// document.querySelector('body').addEventListener('mouseover',(ev)=>{
//     console.log("Mouse Over");
//     console.log(ev.target);
// })

// 4. mouseout
// document.querySelector('body').addEventListener('mouseout', (ev) => {
//     console.log("Mouse Out");
//     console.log(ev.target);
// })

// 5. mouseenter
document.querySelector('body').addEventListener('mouseenter', (ev) => {
    console.log("Mouse enter");
    console.log(ev.target);
})