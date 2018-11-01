const path = require("path");
const express = require("express");

const app = express();
const PORT = 3050;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/survey", function (req, res) {

    res.sendFile(path.join(__dirname, "./app/public/survey.html"));

});

app.get("*", function (req, res) {

    res.sendFile(path.join(__dirname, "./app/public/home.html"));

});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});