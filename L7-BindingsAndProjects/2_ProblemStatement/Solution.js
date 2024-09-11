function Person(name, email, joinDate) {
    this.name = name;
    this.email = email;
    this.joinDate = joinDate;
}

Person.prototype.formatDate = function () {
    return new Date(this.joinDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}

Person.prototype.updateDate = function (date) {
    this.joinDate = date;
}

function Student(name, email, joinDate, course, batchId) {
    Person.call(this, name, email, joinDate);
    this.course = course;
    this.batchId = batchId;
    this.modulesCompleted = 0;
}
Student.prototype = Object.create(Person.prototype);

Student.prototype.updateModules = function (modulesCount) {
    if (modulesCount <= 10 && modulesCount > 0)
        this.modulesCompleted = modulesCount;
}

Student.prototype.calculateCourseProgress = function () {
    return (this.modulesCompleted / 10) * 100;
}

function Teacher(name, email, joinDate, specialisation, courseTeaching) {
    Person.call(this, name, email, joinDate);
    this.specialisation = specialisation;
    this.courseTeaching = courseTeaching;
}

Teacher.prototype = Object.create(Person.prototype);

let teacher_rohit = new Teacher(
    "Rohit",
    "rohit@example.com",
    "2024-03-01",
    "Maths",
    ["Fundamentals of Maths", "Probability"]
);
console.log(teacher_rohit);
let student_yash = new Student(
    "Yash",
    "yash@example.com",
    "2024-03-01",
    "B.Tech",
    "2024-2025"
);
console.log(student_yash);
console.log(teacher_rohit.formatDate());

student_yash.updateModules(5);
console.log(student_yash.calculateCourseProgress())