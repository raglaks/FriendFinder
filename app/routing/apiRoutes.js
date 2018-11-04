const path = require("path");
const express = require("express");
const resArray = require("../data/friends");

const app = express();
const PORT = 3050;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const ModAPI =  {

    tdispAPI: function () {

        app.post("/api/friends", function (req, res) {

            let resObj = req.body;

            console.log(resArray);

            console.log(resObj);

        });

    }

}

module.exports = ModAPI;