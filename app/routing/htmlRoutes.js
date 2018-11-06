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

    getFriends: function () {

        fs.readFile(path.join(__dirname, "../data/friends.txt"), "utf8", function (err, data) {

            console.log(data);

            if (err) throw err;

            if (data) {

                display.resObj = JSON.parse(data);

                console.log(display.resObj);

            } else {

                console.log("input data--API is empty");

            }

        });

        app.get("/api/friends", function (req, res) {

            res.send(display.resObj);

        });

    },

    createAPI: function () {

        app.post("/api/friends", function (req, res) {

            let result = req.body;

            display.resObj.push(result);

            fs.writeFile(path.join(__dirname, "../data/friends.txt"), JSON.stringify(display.resObj), function (err, data) {

                if (err) throw err;

                console.log("updated friends.txt");
            });

        });

    }

}

module.exports = display;