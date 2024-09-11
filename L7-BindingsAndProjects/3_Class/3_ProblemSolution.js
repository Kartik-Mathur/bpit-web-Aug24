class Person {
    constructor(name, email, joinDate) {
        this.name = name;
        this.email = email;
        this.joinDate = joinDate;
    }

    formatDate() {
        return new Date(this.joinDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    updateDate(date) {
        this.joinDate = date;
    }
}

class Student extends Person {
    constructor(name, email, joinDate, course, batchId) {
        super(name, email, joinDate);
        this.course = course;
        this.batchId = batchId;
        this.modulesCompleted = 0;
    }
    updateModules(modulesCount) {
        if (modulesCount <= 10 && modulesCount > 0)
            this.modulesCompleted = modulesCount;
    }

    calculateCourseProgress() {
        return (this.modulesCompleted / 10) * 100;
    }
}

class Teacher extends Person {
    constructor(name, email, joinDate, 
        specialisation, courseTeaching) {
        super(name, email, joinDate);
        this.specialisation = specialisation;
        this.courseTeaching = courseTeaching;
    }
}

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

console.log(Teacher.prototype.__proto__ == Person.prototype);