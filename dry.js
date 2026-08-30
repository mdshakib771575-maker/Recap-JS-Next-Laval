function isValidPrice(price) {
    return typeof price === "number" && price > 0

}

function isValidEmail(email) {
    return email.includes("@") && email.includes(".")
}

function CalculateDiscount(price, discoutnPercent) {
    // nicer 2 tai same kaj kore fun tao ar if ta o

    // if(!price.typeof ==="number" && price > 0){
    //         return 0
    // }
    if (!isValidPrice(price)) {
        return 0;
    }

    let discoutnAmount = (price * discoutnPercent) / 100

    return price - discoutnAmount
}

function CalculateFinalBill(price, VatPersentage = 15) {

    let vat = (price * VatPersentage) / 100
    return price + vat;
}

function formatBDT(amount) {
    return `${amount.toFixed(2)} BDT`
}

function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1)

}

function PeocessOrder(user, itemPrice, discountCode) {
    console.log(`----processing order for ${capitalize(user.name)}`)
    if (!isValidEmail(user.email)) {
        console.log("Error : user Email invalid")
        return
    }

    let currentPrice = itemPrice
    if (discountCode == "NLB") {
        currentPrice = CalculateDiscount(itemPrice, 20)
        console.log("20% Discount applied");

    }
    let totalBill = CalculateFinalBill(currentPrice)

    console.log("Final Amount to pay:",formatBDT(totalBill));
    console.log("order complited Successfully");
}

let user1={name:"shakib",email:"mdshakib75@gmail.com"}

PeocessOrder(user1,2000,"NLB")