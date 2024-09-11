let movieList=document.querySelector('.movie-list');
console.log(movieList)

/*
let movieListChildren=movieList.childNodes;
console.log(movieListChildren);
for(let i = 0 ;i <movieListChildren.length;i++){
    console.log(movieListChildren[i]);
}
*/

// Deleting the DOM elements
movieListChildren = document.querySelectorAll('.movie-name');
for(let i = 0 ;i < movieListChildren.length;i++){
    movieListChildren[i].remove();
}
