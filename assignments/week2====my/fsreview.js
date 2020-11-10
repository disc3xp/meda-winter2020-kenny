// 11/4/2020 review fs
const fs = require("fs");     //we require fs package

let contents = fs.readFileSync("smallessay.txt", "utf-8"); //holding a method ; need 2 arguments

fs.writeFileSync("example2.txt", "this is some text.", "utf-8");  //need 3 arguments (the 2nd argument could be String or a variable) Step:)immediately overwrite the content

fs.appendFileSync("example2.txt", "this is some text.", "utf-8");  //adds to the end of the file.   Steps:)1st read, 2nd add content. 3rd save

fs.existsSync("example.txt"); //ususally 1 arugment; returns true because the file exists in the folder.

fs.readFile("smallessay.txt", "utf-8", (error, text) => {    //readFile is Asynchronous version, but it needs a callback    // (error, text) are parameters
    if (error) {
        console.log("we have an error!", error.message);
    } else {
    console.log("reading done!", text);
    }
}); 

console.log("program done!");

////// so far, if we run our code, we are just reading txt from smallessay.txt, not overriding anything. ////////