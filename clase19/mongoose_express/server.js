const express = require('express');
const app = express();
const connection = require("./database");
connection();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// Router definido en routes/person.js
const userRoutes = require('./routes/user');
app.use("/user", userRoutes);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const PORT = 3000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

