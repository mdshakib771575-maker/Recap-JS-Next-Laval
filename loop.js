// for(let i = 0;i<=10;i++){
//     console.log(`count : ${i}`)
// }

// const Fruits = ["Mango", "apple", "Banana"]
// for (let i = 0; i <= Fruits.length - 1; i++) {
//     console.log(Fruits[i])
// }

// let marks = [60, 70, 80, 90, 40]
// let max = marks[0]
// for (let i = 1; i <= marks.length - 1; i++) {
//     if (max < marks[i]) {
//         max = marks[i]
//     }
// }
// console.log(max)
let number = [10, 10, 10, 10, 10]
// let sum = 0
// for (let i = 0; i <= number.length - 1; i++) {
//     sum += number[i]
// }
// console.log(sum)

// let i = 0

// while (i<=number.length-1){
//     console.log(number[i])
//     i++
// }
let numbers = [10, 15, 20, 25, 30]
// let sum = 0
// for(let num of numbers){
//     // console.log(num)

//       sum+=num

// }
// console.log(sum)


// const avg = sum /numbers.length
// console.log(avg)

const renum = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    renum.push(numbers[i])
}
console.log(renum)