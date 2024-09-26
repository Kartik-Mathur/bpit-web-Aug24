function hello(movie, day) {
    console.log(this, movie, day);
}

let student = {
    name: 'AB',
    age: 10,
    fun: function(){
        console.log(this)
    }
};
student.fun();

Function.prototype.mycall = function (context, ...args) {
    // this=function hello(movie, day) {
    //     console.log(this, movie, day);
    // }

    // context = {
    //     name: 'AB',
    //     age: 10
    // }
    // args: ["Ironman", "Monday"]
    context.myFun = this;
    // context = {
    //     name: 'AB',
    //     age: 10,
    //     myFun: function hello(movie, day) {
    //          console.log(this, movie, day);
    //      }
    // }
    context.myFun(...args);
}

hello.mycall(student, "Ironman", "Monday");