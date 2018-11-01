const path = require("path");
const express = require("express");

const app = express();
const PORT = 3050;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Display = function () {

    this.dispSurvey = function () {

        app.get("/survey", function (req, res) {

            res.sendFile(path.join(__dirname, "../public/survey.html"));

        });

    },

    this.dispElse = function () {

        app.get("*", function (req, res) {

            res.sendFile(path.join(__dirname, "../public/home.html"));

        });

    },

    this.listenDisp = function () {

        app.listen(PORT, function () {

            console.log("App listening on PORT " + PORT);
        });

    }

}

module.exports = Display;