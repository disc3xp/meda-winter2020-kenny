//11/2/2020
// loads up the Node FS module, so it can used in this file.
const fs = require("fs");


// process.argv has the command line information that was used to run this scripts.
let arguments = process.argv;

// console.log(arguments);


let fileName = arguments[2];

console.log(fileName);

// This method allows us to read a file.
let fileContents = fs.readFileSync(fileName, "utf-8");   // need 2 arugments here, second argument is fixed=utf-8


// console.log(fileContents);

// trying to count how many characters are in the essay.txt


// splitting every line
let contentArray = fileContents.split("");
// console.log(contentArray);


let letterCount = 0;

for (let i = 0; i < contentArray.length; i++) {

    if (contentArray[i] === " " || contentArray[i] === "," || contentArray[i] === "." || contentArray[i] === "?" || contentArray[i] === "!") {
        continue;   // skip
    } else {
        letterCount++;
    }

}

console.log(letterCount);