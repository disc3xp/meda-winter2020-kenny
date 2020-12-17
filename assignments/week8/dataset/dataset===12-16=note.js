const fs = require("fs");
const helpers = require("./helpers.js");
const Title = require("./Title.js");

// Read in our dataset.
const data = fs.readFileSync("Hourly_Rates.csv", "utf-8");

// Split up the string into an Array, each array element holds an entry.
const dataArray = data.split("\n");

// Removed unecessary lines.
dataArray.shift();
dataArray.pop();

titleArray = [];

for (let i = 0; i < dataArray.length; i++) {
    let entry = dataArray[i].split(",");
    let fixedEntry = helpers.checkTitleCommas(entry);
    let entryTitleObject = new Title(fixedEntry[1], fixedEntry[2], fixedEntry[3], fixedEntry[4], fixedEntry[5], parseInt(fixedEntry[7]), parseInt(fixedEntry[8]));

    titleArray.push(entryTitleObject);
}


// Figure out how to "fix" titles with commas in it, Using positive lookahead.


// Question 1 START
console.log("What Union has the most members?");

let unions = {};

titleArray.forEach(function (element) {
    let currentUnion = element.unionCode.toString();
    let currentYear = element.year;
    let currentYearArray = currentYear.split("/");

    if (currentYearArray[0] === "2018") {
        if (unions[currentUnion] === undefined) {
            unions[currentUnion] = 1;
        } else {
            unions[currentUnion] += 1;
        }
    }    
});

let highestUnionMemberCount = 0;
let highestUnionCode = null;

for (let i in unions) {
    if (unions[i] > highestUnionMemberCount) {
        highestUnionMemberCount = unions[i];
        highestUnionCode = i;
    }
}

console.log(`The Union with code ${highestUnionCode} has a member count of ${highestUnionMemberCount} for the year of 2018.`);

// Question 1 END


//12/16/2020
/// Question 2 START
console.log("What job title pays the most the most within each union code?");

let highestUnionPay = [];

/*

[
    {
        unionCode: 352,
        highest: 12574,
        title: "Chief of Department"
    }
    {
        unionCode: 220,
        highest: 6808,
        title: "Law Librarian"
    }
]

*/

titleArray.forEach(function (job) {
    let jobYear = job.year.split("/")[0]  //[0] ==> first part of 2018/07/01 ==> 2018
    if ( jobYear === "2018") {

        let found = false;

        highestUnionPay.forEach(function (unionCounter) {

            found = true;

            if (unionCounter.unionCode === job.unionCode) {
                if (job.biweeklyAvg > unionCounter.highest) {  // the job we found higher, than replace
                    unionCounter.highest = job.biweeklyAvg;
                    unionCounter.title = job.title;
                }
            }
        });


        if (!found) {
            highestUnionPay.push({
                unionCode: job.unionCode,
                highest: job.biweeklyAvg,
                title: job.title
            });
        }

    }

});
//sorting
let orderedUnionPay = highestUnionPay.sort(function (a, b) {
    if (a.unionCode > b.unionCode) {
        return -1;
    } else if (a.unionCode < b.unionCode) {
        return 1;
    } else {
        return 0;
    }
});

//console.log(highestUnionPay);
console.log(orderedUnionPay);

for (let i = 0; i < orderedUnionPay.length; i++) {
    let currentUnion = orderedUnionPay[i];
    
    console.log(`The highest paying job in 2018 for the Union with code ${currentUnion.unionCode} is ${currentUnion.title} with an biweekly income of ${currentUnion.highest}`);
}

/// Question 2 END
