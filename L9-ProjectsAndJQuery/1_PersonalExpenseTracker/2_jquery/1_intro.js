// DOM 
// All the elements needs to be wrapper in a jquery wrapper
// using '$' or 'jQuery'
// 1. Elements selection
const heading = $('#heading');
const movies = $('.movies');
const movieList = $('li');

console.log(heading);
console.log(movies);
console.log(movieList);

// 2. CRUD on Text
// heading.text()->Value dega, GETTER
// heading.text("NEW CONTENT")->Value UPDATE KR DEGA, SETTER
heading.text(`${heading.text()}!!`);
heading.remove();

// 3. Creating Elements
const li = $('<li>');
// li.text('Harry Potter').css('color','red').css("background-color","orange");
li.text('Harry Potter').css({
    'color': 'red',
    "background-color": "orange"
})
movieList.css({
    'color': 'red',
    "background-color": "orange"
})
movies.append(li);
console.log(li);

// 4. Events
$('body').keyup((ev) => {
    console.log(ev.key)
})

$(window).click((ev)=>{
    console.log("Mouse Clicked");
})
