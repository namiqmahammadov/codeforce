const express = require('express');
const fs = require('fs');
const app = express();

const userData = fs.readFileSync('./data.json');
const users = JSON.parse(userData);
console.log(users);

app.get("/users", (req, res) => {
    res.send(users);
});

app.listen(8080, () => {
    console.log("Server işə düşdü http://localhost:8080");
});
