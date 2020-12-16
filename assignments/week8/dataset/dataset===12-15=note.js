const fs = require("fs");

//***********
const helpers = require("./helpers.js");
const Title = require("./Title.js");

// Read in our dataset.
const data = fs.readFileSync("Hourly_Rates.csv", "utf-8");

// Split up the string into an Array, each array element holds an entry.
const dataArray = data.split("\n");

// Removed unecessary lines.
dataArray.shift();  //It's the title line in excel file
dataArray.pop();  //It's the empty line in the excel file



//console.log(dataArray[0]);

titleArray = [];

for (let i = 0; i < dataArray.length; i++) {
    let entry = dataArray[i].split(",");
    let fixEntry = helpers.checkTitleCommas(entry);
    let entryTitleObject = new Title(fixEntry[1], fixEntry[2], fixEntry[3], fixEntry[4], fixEntry[5], parseInt(fixEntry[7]), parseInt(fixEntry[8]));

    titleArray.push(entryTitleObject);
}

console.log(titleArray.length);

console.log(entryTitleObject);



let example = dataArray[0].split(",");


//12-15-2020 using helper.js
example =helpers. checkTitleCommas(example);
//example = checkTitleCommas(example);


//arrays [7] and [8] are biweekyMin and biweeklyMax; we need parseInt to make them into mumber and (min + max) / 2
// let exampleObject = new Title(example[1], example[2], example[3], example[4], example[5], parseInt(example[7]), parseInt(example[8]));
// console.log(exampleObject);

// Figure out how to "fix" titles with commas in it, Using positive lookahead.


// Question 1 START
console.log("What Union has the most members?.");


// Question 1 END



module.exports = Title;
