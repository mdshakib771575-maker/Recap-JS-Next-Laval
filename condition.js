// let age = 10
// if(age<18){
//     console.log("Not Voter")
// }else{
//     console.log("Voter");
// }

let marks = 70

// if (marks >= 80) {
//     console.log("A+")
// } else if (marks >= 70) {
//     console.log("A")
// } else if (marks >= 60) {
//     console.log("A-")
// } else {
//     console.log("Improvement")
// }

switch (true) {
    case marks >= 80:
        console.log("A+");
        break;
    case marks >= 70:
        console.log("A");
        break;
    case marks >= 60:
        console.log("A-");
        break;
    default:
        console.log("improvment")
        break;
}