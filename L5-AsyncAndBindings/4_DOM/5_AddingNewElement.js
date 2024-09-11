let movieList=document.querySelector('.movie-list');

console.log(movieList.innerHTML);
movieList.innerHTML+=`<li>Dr Strange</li>`;
// movieList.innerText += `<li>Dr Strange</li>`;
// console.log(movieList.innerText);

// Better Way: 2nd way of adding new element
let li = document.createElement('li');
console.log(li)
li.classList.add('movie-name');
li.innerText='Spiderman';

// We can append the new item inside the movieList
movieList.appendChild(li);