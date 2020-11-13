// 11/12/2020
// const fs = require("fs");  (example only)
const _ = require("lodash");    // use _,  instead of lodash here

let myNumber = _.random(30, 70);   // https://lodash.com/docs/4.17.15#random , picking a random number.
// let someNumber = Math.floor((Math.random * 41) + 30);   //this is the JavaScript method.

console.log(myNumber);
