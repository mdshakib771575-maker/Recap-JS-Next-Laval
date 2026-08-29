const Student = {
    name: "shakib",
    marks: {
        bnagla: 75,
        english: 63,
        Math: 85
    }
}

let totalMarks = 0;
let totalSub = 0;

for (let sub in Student.marks) {
    // console.log(sub)
    totalMarks += Student.marks[sub]
    totalSub++

}
// console.log(totalMarks)
// console.log(totalSub)

const avg = (totalMarks / totalSub).toFixed(2)
console.log(avg)








