// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
// module.exports = { sum };  

// function sum(a, b) {
//     return a + b;
// }

function fromEuroToDollar(amount) {
    const conversionRate = 1.07;
    return amount * conversionRate;
}
function fromDollarToYen(amount) {
    const conversionRate = 156.5;  // Based on 1 USD = 156.5 JPY
    return amount * conversionRate;
}
function fromYenToPound(amount) {
    const conversionRate = 0.87 / 156.5;  // Based on 1 JPY to GBP conversion using the intermediate euro value
    return amount * conversionRate;
}


module.exports = {
    sum,
    fromEuroToDollar,fromDollarToYen,fromYenToPound
};