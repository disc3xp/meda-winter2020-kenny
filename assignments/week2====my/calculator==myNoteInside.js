let arguments = process.argv;

console.log(arguments);
// arugrment[1]= node.exe
// arugrment[2]= 2
// arugrment[3]= +
// arugrment[4]= 10
let number1 = arguments[2];   // [] index
let mathOperator = arguments[3];
let number2 = arguments[4];

let num1Converted = parseInt(number1);
let num2Converted = parseInt(number2);
// if statement
if (isNaN(num1Converted) || isNaN(num2Converted)) {
    console.log("Error 1234567: The first or second number is not an actual number! Try again. Note that  * is not a valid Math operator.");
//} else if (mathOperator !== "+" ) || mathOperator !== "/" {


} else {

    if (mathOperator === "+") {
    console.log(`The sum of ${num1Converted} and ${num2Converted} is ${num1Converted + num2Converted}.`);
 } else if (mathOperator === "-") {
    console.log(`The difference of ${num1Converted} and ${num2Converted} is ${num1Converted - num2Converted}.`);

 }

}



// console.log(typeof num1Converted, typeof num2Converted);


/*

    //console.log(num1Converted + num2Converted);
    console.log(`The sum of ${num1Converted} and ${num2Converted} is ${num1Converted + num2Converted}.`);

*/