//week3, homework2

// Enabling access to all fs module methods
const fs = require("fs");

// Declaring a variable and it is used to synchronously check if the file already exists in the given path or not.
const fileExists = fs.existsSync("creating.json");


// Declaring a variable
let contents;

// Darlaring a variable and gives the ability which property returns the 3rd array's
let arguments = process.argv.slice(2);

// Declaring a variable, and using this method to convert a JavaScript object or value to a JSON string
let jsonObjectToString = JSON.stringify(arguments);

// Daclaring a varibale, and using this to method parse a JSON string, constructing the JavaScript object or value described by the string.
let jsonStringToObject = JSON.parse(jsonObjectToString);



// Check if the file, "creating.json", exists
if (fileExists) {
    contents = fs.readFileSync("creating.json", "utf-8");

    //if the file exists, true if and only if 1st argument or 2nd argument is entered in the command-line, and print out an error message
    if(arguments.length == 0 || arguments.length == 1){
        console.log("There was no argument found (Hint: need all 3 arguments)!");

       // if file exist, write and append the value from 3rd arugment into creating.json
    } else {
        fs.appendFileSync("creating.json", jsonStringToObject, "utf-8");
       }

// If the file does not exist
} else {
    // if file does not exist, true if less than and equal to first two arguments are entered in the command-line, system will auto create the file with exact name and print out a message.
   if(arguments.length <= 1){
    fs.writeFileSync("creating.json", "utf-8");
    console.log("creating.json is required and auto created for you!");
   }
   // if the file does not exist, write and append the value from 3rd argument into creating.json
   else{
    fs.appendFileSync("creating.json", jsonStringToObject, "utf-8");
   }
}