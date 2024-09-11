// To select elements from page we have multiple methods inside document
/*
1. document.getElementById() - returns the element with the specified id
2. document.getElementsByTagName(); 
     - returns the first element that is mentioned inside the tag
    3. document.getElementByClassName();
        - returns all the elements with the mentioned classname
*/

let h1 = document.getElementById('heading');
console.log(h1)

let movies = document.getElementsByClassName('movie-name');
console.log(movies);

for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}

let divs = document.getElementsByTagName('div');
console.log(divs);

// Query Selector
let heading = document.querySelector('#heading');
console.log(heading);

let allMovies=document.querySelectorAll('.movie-name');
console.log(allMovies);

let allDivs=document.querySelectorAll('div');
console.log(allDivs)