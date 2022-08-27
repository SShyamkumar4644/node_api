const express = require('express');// module which imports all the features of the express module.
const student = require('./models/Student');

const app = express(); // assigning this express module to app variable to carry on forward functions

app.use(express.json()); // store the values in json format

require('./connection');

const Student = require('./models/Student');// import student schema

//put data
app.post("/student", async (req, res) =>{
    try{
        const student = new Student(req.body);
        const createStudent= await student.save();
        res.status(201).send(createStudent); // this will save mongodb atlas, status successful
    } catch(e){
        res.status(400).send(e); // here you might get error
    }
    
})

//display
app.get("/student", async (req, res) =>{
    try{
        const students= await Student.find();
        res.send(students); // this will save mongodb atlas, status successful
    } catch(e){
        console.log(e);
        res.status(400).send(e); // here you might get error
    }
    
})// get all student data whatever that is stored in database

//display
app.get("/student/:id", async (req, res) =>{
    try{
        const _id=req.params.id;
        const student = await Student.findById(_id);
        if(!student){
            return res.status(404).send();
        }
        else{
            res.send(student);
        }
    } catch(e){
        console.log(e);
        res.status(400).send(e); // here you might get error
    }
    
})// get all student data whatever that is stored in database

//update
app.put("/student/:id", async (req, res) =>{
    try{
        const _id =req.params.id;
        const student = await Student.findByIdAndUpdate(_id, req.body, {
            new:true,
        });
        res.send(student);
    } catch(e){
        console.log(e);
        res.status(400).send(e); // here you might get error
    }
    
})// get all student data whatever that is stored in database

//delete
app.delete("/student/:id", async (req, res) =>{
    try{
        const _id =req.params.id;
        const student = await Student.findByIdAndDelete(_id);
        if(!student){
            return res.status(404).send();
        }
        else{
            res.send(student);
        }
    } catch(e){
        console.log(e);
        res.status(400).send(e); // here you might get error
    }
    
})// get all student data whatever that is stored in database

// app.post('/quotes', (req,res) => {
//     const quote = req.body;
//     quotes.push(quote);
//     res.send({ message: "Quote added"});
// })

// // end point of API

// app.get('/quotes', (req, res)=> {
//     res.send(quotes);
// })

// app.get("quotes/:id", (req, res)=> {
//     const id = req.params.id;
//     const quote= quotes.find(quote => quote.id == id);
//     res.send(quote);
// })

// app.get('/users', (req, res)=> {
//     res.send('Hello from users');
// })

// app.get('/contacts', (req, res)=> {
//     res.send('Helloo from contacts');
// })

// path and callback parameters are there for that, when we get path 
// what we have to do

// creating class and object initialising

app.listen(3000, () =>{
    console.log('Server started on port 3000');
})
// The app.listen() function is used to bind and listen the 
// connections on the specified host and port. This method 
// is identical to Node’s http.Server.listen() method.

// port and function that listen has, 3000 is port number in localhost and
// function in console.log function

// Collections
// ‘Collections’ in Mongo are equivalent to tables in relational databases. They can hold multiple JSON documents.

// Documents
// ‘Documents’ are equivalent to records or rows of data in SQL. While a SQL row can reference data in other tables, Mongo documents usually combine that in a document.

// Fields
// ‘Fields’ or attributes are similar to columns in a SQL table.

// Schema
// While Mongo is schema-less, SQL defines a schema via the table definition. A Mongoose ‘schema’ is a document data structure (or shape of the document) that is enforced via the application layer.

// Models
// ‘Models’ are higher-order constructors that take a schema and create an instance of a document equivalent to records in a relational database.