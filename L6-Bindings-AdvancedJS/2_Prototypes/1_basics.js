function hello(){
    console.log('Hello');
}

hello.a = 10;

hello(); // Hello
console.log(hello.a); // 10