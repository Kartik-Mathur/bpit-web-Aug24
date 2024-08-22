function createSection(section) {
    let students = []

    let avg = 0;

    for (let i = 0; i < students.length; i++) {
        avg += students[i].marks;
    }

    if (students.length > 0) avg /= students.length;

    return function () {
        function getStudents() {
            return students;
        }

        function getAvg() {
            return avg;
        }

        function addStudent(name, marks) {
            students.push({
                name: name,
                marks: marks
            })
            avg=0;
            // update the avg bucket because new student added
            for (let i = 0; i < students.length; i++) {
                avg += students[i].marks;
            }
        
            if (students.length > 0) avg /= students.length;

        }

        return {
            "getStudents": getStudents,
            "getAvg": getAvg,
            "addStudent": addStudent
        }
    }
}


let eceSection = createSection("ECE");
let ece = eceSection();
ece.addStudent("Yash",18);
ece.addStudent("Vandana",100);
ece.addStudent("Reyanshi",99);
ece.addStudent("Deepika",98);
ece.addStudent("Chinmaya",90);
ece.addStudent("Naman",50);
console.log(ece.getStudents());
console.log(ece.getAvg());

let itSection=createSection("IT");
let it=itSection();

it.addStudent("Saurabh",100);
it.addStudent("Chirag",90);
it.addStudent("Piyush",99);
it.addStudent("Anoushka",100);
console.log(it.getStudents());
console.log(it.getAvg());