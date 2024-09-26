let info = (function () {
    let student = {
        marks: 80,
        name: 'Deepika',
        age: 19
    }

    function isPass() {
        return student.marks >= 60
    }

    function getName() {
        return student.name;
    }

    function getAge() {
        return student.age;
    }

    function updateMarks(m){
        student.marks=m;
    }

    return {
        isPass,
        getName,
        getAge,
        updateMarks
    }
})()

console.log(info);
console.log(info.getAge());
console.log(info.getName());
info.updateMarks(10);
info.updateMarks(100);
console.log(info.isPass());