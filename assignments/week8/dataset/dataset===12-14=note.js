const fs = require("fs");

// Read in our dataset
const data = fs.readFileSync("Hourly_Rates.csv", "utf-8");
//console.log(data);

// Split up the string into an Array, each array element holds an entry / a row.
const dataArray = data.split("\n");

//console.log(dataArray[0]);
//console.log(dataArray[dataArray.length - 1]);
//console.log(dataArray.length);

// Removed unecessary lines
//unshift to move the 1st array, and pop to remove the last arry
dataArray.shift();
dataArray.pop();

class Title {
    constructor(year, jobCode, title, unionCode, setID, min, max, ) {
        this.year = year;
        this.setID = setID;
        this.jobCode = jobCode;
        this.title = title;
        this.unionCode = unionCode; 
        this.biweeklyMin = min;
        this.biweeklyMax = max;
        this.biweeklyAvg = (min + max) / 2;
        this.steps = [];
    }
}


console.log(dataArray[0]);

//split by comma
const exmaple = dataArray[0].split(",");
console.log(exmaple);

example[3] = example[3] + exmaple[4];

example.splice(4, 1);
// Figure out how to "fix" titles with commas in it.  xxxxxxxxxxxxxxxxxxxxxxx



// Question 1 START
console.log("What Union has the most members?");

// Question 1 END