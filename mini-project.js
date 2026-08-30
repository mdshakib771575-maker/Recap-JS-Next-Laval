const students = [
    { id: 101, name: "shakib", age: 21 },
    { id: 102, name: "roni", age: 25 }
]

function addStudent(name, age) {
    let newId = students.length > 0 ? students[students.length - 1].id + 1 : 101;
    console.log(newId)

    let newStudent = {
        id: newId,
        name,
        age
    }
    students.push(newStudent)
}
addStudent("sojiv", 25);

// console.log(students)

function FindStudent(id) {
    let fonundstudent = null

    for (student of students) {
        student.id == id ? fonundstudent = student : null
    }

    fonundstudent?console.table(fonundstudent):console.log("404 Not Found")
}
FindStudent()