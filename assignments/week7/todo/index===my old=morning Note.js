const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//exporting?
const credentials = require("./credentials.js");

const dbCredentials = credentials.dbURL;  //a property
//console.log(dbCredentials);
//console.log(credentials.secretValue);
const dbOptions = {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true};
let dbConnection = mongoose.connect(dbCredentials, dbOptions, (error) =>{
    if (error) {
        console.log("Mongoose error: " + error);
    } else {
        console.log("MongoDB connection opened.");
    }
});


let todoSchema = new mongoose.Schema({
    title: String,
    text: String,
    completed: Boolean,
    archived: Boolean,
    priority: Number,
    timestamp: Number
});

let todoModel = new mongoose.model("notecollections", todoSchema);




const port = 3000;

const app = express();
const http = require("http").Server(app);
http.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

console.log("Express server is running on port " + port);


app.use("/", express.static("client/"));

//Need 2 arguments: route and callback
app.post("/newNote", (request, response) => {
    const note = request.body;
    //console.log(typeof note.completed);

    let newNoteDocument = new todoModel({
        title: note.title,
        text: note.text,
        completed: (note.completed === "true"), //wanted to be boolean
        archived: (note.archived === "true"),   //wanted to be boolean
        priority: parseInt(note.priority),  //wanted to be number
        timestamp: parseInt(note.timestamp) //wanted to be number
    });


    newNoteDocument.save((error) => {
        
        const responseObject = {
            saved: false,
            error: null
        };
        
        if (error) {
            response.send(responseObject);
        } else {
            responseObject.saved = true;
            response.send(responseObject);
        }
    });

});



app.post("/getList", (request, response) => {
    todoModel.find({}, (error, results) => {
        
        const responseObject = {
            list: results,
            error: null
        };
        
        if (error) {
            console.log("failed to read database.");
        } else {
            response.send(responseObject);
        }
    });
});



app.post("/modify", (req, res) => {
    let request = req.body;
    if (request.action === "delete") {
        todoModel.findByIdAndDelete(request.id, (error, deleted) =>{
            if (error) {
                console.log(erro);
            } else {
                let response = {
                    copy: deleted
                }
                res.send(response);
            }
        });
    }
});