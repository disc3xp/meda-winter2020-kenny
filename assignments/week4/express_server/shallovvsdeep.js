// 11/24/2020 shallo vopy vs deep copy
let myArray = [1, 2, 3];

let myCustomArray = myArray;

myCustomArray.pop();

console.log(myCustomArray);
console.log(myArray);

let myOriginalObject = {
    "name": "Kenny",
    "age": 30
};

let myUpdatedObject = myOriginalObject;

myUpdatedObject.ag =31;

console.log(myOriginalObject);
console.log(myUpdatedObject);


// to make a true/deep copy pf object, in JavaScript

let myTrueCopy = myArray.slice(0);
myTrueCopy.pop();
console.log(myTrueCopy, myArray);