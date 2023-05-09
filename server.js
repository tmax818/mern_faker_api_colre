const express = require("express");
const {faker} = require('@faker-js/faker');
const {createUser} = require('./user')
const {createCompany} = require('./company')
const app = express();
const port = 8000;
    
// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/users/new", (req, res) => {
    res.json(createUser(faker));
});

app.get("/api/company/new", (req, res) => {
    res.json(createCompany(faker));
});

app.get("/api/company", (req, res) => {
    res.json({company: createCompany(faker), user: createUser(faker)});
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
