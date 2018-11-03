const path = require("path");
const express = require("express");

const app = express();
const PORT = 3050;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const ModAPI = function () {

    this.dispAPI = function () {

        app.get("/api/friends", function (req, res) {

            return res.json(waitArr);

        });

    }

}

module.exports = ModAPI;