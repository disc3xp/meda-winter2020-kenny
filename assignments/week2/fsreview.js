const fs = require("fs");

let contents = fs.readFileSync("smallessay.txt", "utf-8");

fs.writeFileSync("example2.txt", "this is some text.", "utf-8");

fs.appendFileSync("example2.txt", "this is some text.", "utf-8"); // adds to the end of the file.

fs.existsSync("example.txt"); // returns true because the file exists in the folder.

fs.readFile("smallessay.txt", "utf-8", (error, text) => {
    if (error) {
        console.log("we have an error!", error.message);
    } else {
        console.log("reading done!", text);
    }
}); // Asynchronous version.

console.log("program done!");