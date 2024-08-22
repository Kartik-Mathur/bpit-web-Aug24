function person(){
    var name = "John";
    var age = 30;
    var city = "New York";

    function printPersonDetails(){
        console.log("Name: " + name);
        console.log("Age: " + age);
        console.log("City: " + city);
    }

    return printPersonDetails;
}

let f = function printPersonDetails(){
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("City: " + city);
};

f();