const fruits = ["apple", "banana", "coconat"]

// let fEach = fruits.forEach((f,index) => {
//     console.log(`${f},${index+1}`)
//     // return (`${f},${index+1}`) // foreach can not return
// });
// console.log(fEach)

// let NewFruits = fruits.map((f) => {
//     // console.log(`${f},${index+1}`)
//     return (f.toUpperCase()) // map return new array
// });
// console.log(NewFruits)




// const customises= fruits.filter((f)=> f.length > 6)
// console.log(customises)


const customis = fruits.find((f) => f.length > 5)
// console.log(customis); 

const Students = [
    { nsme: "shakib", age: 21 },
    { nsme: "akib", age: 25 },
    { nsme: "bakib", age: 23 },

]

const studentCheak = Students.some((s) => s.age > 23)
// console.log(studentCheak);

const studentCheak2 = Students.every((s) => s.age > 23)
console.log(studentCheak2);