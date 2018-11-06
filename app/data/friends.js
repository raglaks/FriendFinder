const fs = require("file-system");

function readAPI() {

    fs.readFile(path.join(__dirname, "../data/friends.txt"), "utf8", function (err, data) {

        console.log(data);

        if (err) throw err;

        if (data) {

            console.log(JSON.parse(data));

        } else {

            console.log("input data--API is empty");

        }

    });

}

readAPI();