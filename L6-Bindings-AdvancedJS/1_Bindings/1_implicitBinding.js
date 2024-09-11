console.log(this);
this.a = 100;

let person = {
    name: 'John',
    age: 20,
    isAdult: function(){
        console.log(this);
        this.a = 40;

        function hello(){
            console.log(this)
        }
        
        hello();

    }
}

person.isAdult();

console.log(person)
// function hello(){
//     console.log(this)
// }

// hello();