let weight = process.argv[2]
let height = process.argv[3]
// console.log(weight,height)

const calculateBmi = (weight, height) => {
    const bmi = weight / (height * height)
    
    return  bmi
}


console.log(calculateBmi(weight,height));

// console.log(typeof NaN)