const Display = function () {

    this.dispSurvey = function() {

        app.get("/survey", function (req, res) {

            res.sendFile(path.join(__dirname, "./app/public/survey.html"));
    
        });

    },

    this.dispElse = function() {

        app.get("*", function (req, res) {

            res.sendFile(path.join(__dirname, "./app/public/home.html"));
    
        });

    }

}

module.exports = Display;