const path = require("path");
const express = require("express");
const fs = require("file-system");

const app = express();
const PORT = 3050;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const display = {

    resObj: [],

    dispSurvey: function () {

        app.get("/survey", function (req, res) {

            res.sendFile(path.join(__dirname, "../public/survey.html"));

        });

    },

    dispElse: function () {

        app.get("*", function (req, res) {

            res.sendFile(path.join(__dirname, "../public/home.html"));

        });

    },

    listenDisp: function () {

        app.listen(PORT, function () {

            console.log("App listening on PORT " + PORT);
            
        });

    },

    getAPI: function () {

        app.get("/api/friends", function (req, res) {

            res.send(display.resObj);

        });

    },

    createAPI: function () {

        app.post("/api/friends", function (req, res) {

            let result = req.body;

            console.log(result);

            console.log(display.resObj);

            display.resObj.push(result);

            console.log(display.resObj);

        });

    }

}

module.exports = display;