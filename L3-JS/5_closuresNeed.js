// ECE,IT,CS
// Store students name, marks
// func: UpdateMarks(name,marks)
// func: getMarks(name)
// func: getAvg("ECE")
// func: addStudent(name,marks:optional)
// func: getSudents("ECE")
let students = [
    { name: 'Vandana', marks: 100, section: "ECE" },
    { name: 'Reyanshi', marks: 99, section: "ECE" },
    { name: 'Deepika', marks: 98, section: "IT" },
    { name: 'Chinmaya', marks: 90, section: "CS" },
    { name: 'Naman', marks: 50, section: "IT" }
];

function getSudents(section) {
    let newArr = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].section == section) {
            newArr.push(students[i])
        }
    }

    return newArr;
}

function getAvg(section) {
    let sum = 0;
    let cnt = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i].section == section) {
            sum += students[i].marks;
            cnt++;
        }
    }
    let avg = 0;
    if (cnt > 0) {
        avg = sum / cnt;
    }
    return avg;
}

console.log(getSudents("ECE"));
console.log(getAvg("ECE"));