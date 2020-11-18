//week3, homework2, (a working program)

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

// Daclaring a varibale, and using this to method parse a JSON string, and then constructing the JavaScript object or value described by the string.
let jsonStringToObject = JSON.parse(jsonObjectToString);



// Check if the file "creating.json" exists, and then read the file,
if (fileExists) {
    contents = fs.readFileSync("creating.json", "", "utf-8");

    //if the file exists, check if less than 3 arguments are entered in the terminal, and then print out a warning message.
    if(arguments.length < 1){
        console.log("Warning: There was no argument found! (Hint: need all 3 arguments)");

       // if file exist and all 3 arguments are entered, write and append the value from 3rd arugment into creating.json
    } else {
        fs.appendFileSync("creating.json", jsonStringToObject, "utf-8");
       }

// If the file does not exist,
} else {
    // if file does not exist and less than 3 arguments are entered in the terminal, system will auto generate the file with the exact file and print out a message.
   if(arguments.length < 1){
    fs.writeFileSync("creating.json", "", "utf-8");
    console.log("creating.json is required and it is auto generated for you!");
   }
   // if the file does not exist but all 3 arguments are entered in the terminal at the first attempt, and then simultaneously write the value from 3rd argument into creating.json!
   else{
    fs.writeFileSync("creating.json", jsonStringToObject, "utf-8");
   }
}