function fun(f) {
    console.log("Inside fun");
    f();
}

function person() {
    console.log("Name", "Hritik");
    console.log("Age", 22);
    console.log("Hobbies", "Neend");
}

fun(person);


function funGenerator() {
    function world() {
        console.log("World");
    }
    return world;
}

let x = funGenerator();

x();