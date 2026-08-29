const user = {
    name:"shakib",
    position:"programer",
    age:20,
    address:{
        upazila:"Fulgazi",
        Zila:"Feni"
    },
    sports:["Cricket","Footboll","Kabadi"]

}

// console.log(user)
// console.log(user["address"]["Zila"]="Dhaka");

// console.log(user.address["Zila"]="Dhaka");
// console.log(user.sports[0]);

// console.log(Object.keys(user))
// console.log(Object.values(user))
console.log(Object.entries(user))