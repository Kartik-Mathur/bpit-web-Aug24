// Base Person constructor
function Person(name, email, joinDate) {
    this.name = name;
    this.email = email;
    this.joinDate = new Date(joinDate);
}

// Common method for all people at Coding Blocks
Person.prototype.formatJoinDate = function() {
    return this.joinDate.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
};

// Student constructor
function Student(name, email, joinDate, course, batchId) {
    Person.call(this, name, email, joinDate);
    this.course = course;
    this.batchId = batchId;
    this.completedModules = 0;
}

// Set up prototype chain
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Student method for progress
Student.prototype.calculateProgress = function() {
    const totalModules = 10; // Assume each course has 10 modules
    return (this.completedModules / totalModules) * 100;
};

// Teacher constructor
function Teacher(name, email, joinDate, specialization, coursesTeaching) {
    Person.call(this, name, email, joinDate);
    this.specialization = specialization;
    this.coursesTeaching = coursesTeaching;
}

// Set up prototype chain
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

// Teacher method for Teaching Load
Teacher.prototype.calculateTeachingLoad = function() {
    return this.coursesTeaching.length * 3; // Assume each course takes 3 hours per week
};

const student = new Student("Kriti", "Kriti@cb.com", "2023-06-15", "Web Development", "WD101");
student.completedModules = 4;
console.log(student.name); // Kriti
console.log(student.formatJoinDate()); // "June 15, 2023"
console.log(student.calculateProgress()); // 40

const teacher = new Teacher("Kartik", "kartik@cb.com", "2022-01-10", "JavaScript", ["NodeJS", "JS", "ReactJS"]);
console.log(teacher.name); // "Kartik"
console.log(teacher.formatJoinDate()); // "January 10, 2022"
console.log(teacher.calculateTeachingLoad()); // 9

// Mentor role
function Mentor(name, email, joinDate, expertise, studentsAssigned) {
    Person.call(this, name, email, joinDate);
    this.expertise = expertise;
    this.studentsAssigned = studentsAssigned;
}

Mentor.prototype = Object.create(Person.prototype);
Mentor.prototype.constructor = Mentor;

Mentor.prototype.calculateMentoringLoad = function() {
    return this.studentsAssigned.length;
};

const mentor = new Mentor("Monu", "Monu@cb.com", "2023-03-01", "Java", ["Bhawansh", "Varun", "Naman"]);
console.log(mentor.name); // "Monu"
console.log(mentor.formatJoinDate()); // "March 1, 2023"
console.log(mentor.calculateMentoringLoad()); // 3