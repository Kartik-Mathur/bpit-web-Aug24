class Person {
    constructor(name, email, joinDate, age) {
        this.name = name;
        this.email = email;
        this.joinDate = joinDate;
        this.isAdult = function () {
            return age > 18;
        }
    }

    updateName(name){
        this.name = name;
    }

    set updateEmail(email){
        this.email = email;
    }

    get getEmail(){
        return this.email;
    }

    static sayHi(){
        return "Hiiii!";
    }
}

let p = new Person("Yash", "yash@example.com", "2024-03-01", 17);
console.log(p.isAdult());
p.updateName("Yash Kaushik");
console.log(p);

p.updateEmail = "yash@bpit.com";
console.log(p.getEmail)
console.log(Person.sayHi());
console.log(Person.prototype)