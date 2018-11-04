const path = require("path");
const express = require("express");
const resArray = require("../data/friends");

const app = express();
const PORT = 3050;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const ModAPI = function () {

    this.dispAPI = function () {

        let resObj = req.body;

        // fs.writeFile("../data/friends.js", resObj, (err) => {

        //     if (err) throw err;

        //     console.log("answers recorded...");
        // });

        console.log(resArray);

        console.log(resObj);

    }

}

module.exports = ModAPI;