const path = require("path");

const display = {

    dispSurvey: function (app) {

        app.get("/survey", function (req, res) {

            res.sendFile(path.join(__dirname, "../public/survey.html"));

        });

    },

    dispElse: function (app) {

        app.get("*", function (req, res) {

            res.sendFile(path.join(__dirname, "../public/home.html"));

        });

    }

}

module.exports = display;