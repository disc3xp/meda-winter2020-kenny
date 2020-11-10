// 11/4/2020
// Json====JavaScript Object Notation is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types.


/*

Json RULES:
1) All keys MUST be in quotes.
2) No functions allowed.
3) Only one "object".
4) No comments.
(Json cannot save/pass around functions/cannot convert the function into .json)
*/


const fs = require("fs");

const fileExists =fs.existsSync("example.json");

let contents;

if (fileExists) {
    contents =fs.readFileSync("example.json", "utf-8");
} else {
    console.log("File does not exist. Quitting...");
    return;
}


//we need to conver contents(String right now) to an object
let contentsObject = JSON.parse(contents);  

console.log(typeof contents); //here is String, right now
//console.log(typeof contents); 
console.log(typeof contentsObject);   //here is an object, now
//console.log(typof contentsObject); 


const myObject = {
    "lastName": "Doe",
    "abitlity": function () {
        console.log(this.lastName + " is eating food.");  //this   represents the object itself /  this==>myObject   here
    },
    possessions: ["car", "house", "refrigerator"],   //key
    deceased: false, //boolean
    age: 45,
    "is fun": false,
    lastUpdate: "11/4/2020",  //String
    lastUpdateObject: new Date(Date.now())  // class?
};


let jsonObjectConverted = JSON.stringify(myObject);  //storing in this variable

console.log(jsonObjectConverted);   //showing all keys { "lastname:", "possessions:[, , ] ............ }


fs.writeFileSync("savedJSON.json", jsonObjectConverted, "utf-8");  //now savedJSON.json is auto created and check it out.

myObject.abitlity();

myObject.age;   // .method
myObject["is fun"];  //bracket notation method


let parsedStringifiedJSON = fs.readFileSync("savedJSON.json", "utf-8");

console.log(myObject);
console.log(parsedStringifiedJSON);



