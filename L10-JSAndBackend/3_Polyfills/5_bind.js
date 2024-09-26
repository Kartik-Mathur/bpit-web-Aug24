function hello(movie, college, city) {
    console.log("this: ",this);
    console.log("Movie: ",movie);
    console.log("College: ",college);
    console.log("City: ",city);
}

let student = {
    name:  'Deepika',
    age: 20,
    year: 2025
}

Function.prototype.mybind = function(context,...args){
    let fun = this;
    return function(...args1){
        fun.apply(context,...args,...args1)
    }   
}

let f = hello.mybind(student,"Ironman");
f("BPIT","Delhi");