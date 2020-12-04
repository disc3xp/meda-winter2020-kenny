// 12/4/2020 delete.js
const mongoose = require("mongoose");

const db = "mongodb+srv://mongoosePracticeUser:mongoosePracticeUser@cluster0.mwtjn.mongodb.net/genericDatabase?retryWrites=true&w=majority";


let connection = mongoose.connect(db, {useNewUrlParse: true, useFindAndModify: false, useUnifiedTopology: true}, (error) => {
    if (error) {
        console.log("There was an error", error);
    } else {
        console.log("Successfully connected to MongoDB Database genericDatabase.");
    } 
}); 


let exampleSchema = new mongoose.Schema({
    username: String,
    password: String,
    created: String,
    age: Number,
    accountClosed: Boolean
});

let exampleModel = new mongoose.model("firstcollections", exampleSchema); 



// Finds a specific document by its ID, and deletes the document from the database, and returns either an error or results. Note results will have a copy of the deleted document.
exampleModel.findByIdAndDelete("5fca76e48c0ac11b5c82fb7b", (error, results) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Successfully deleted the following document from the database: ", results);
    }
});