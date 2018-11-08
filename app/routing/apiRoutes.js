const path = require("path");
const fs = require("file-system");
const friendsData = require("../data/friends.js");

const modAPI = {

    resObj: [],

    getFriends: function (app) {

        fs.readFile(path.join(__dirname, "../data/friends.txt"), "utf8", function (err, data) {

            if (err) throw err;

            if (data) {

                resObj = JSON.parse(data);

            } else {

                console.log("input data--API is empty");

            }

        });

        app.get("/api/friends", function (req, res) {

            res.send(resObj);

        });

    },

    createAPI: function (app) {

        app.post("/api/friends", function (req, res) {

            let result = req.body;

            resObj.push(result);

            fs.writeFile(path.join(__dirname, "../data/friends.txt"), JSON.stringify(resObj), function (err, data) {

                if (err) throw err;

                console.log("updated friends.txt");
            });

            friendsData();

        });

    }

}

module.exports = modAPI;