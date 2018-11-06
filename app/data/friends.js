const fs = require("file-system");
const path = require("path");

let compare;

function readAPI() {

    fs.readFile(path.join(__dirname, "../data/friends.txt"), "utf8", function (err, data) {

        //console.log(data);

        if (err) throw err;

        if (data) {

            compare = JSON.parse(data);
            console.log(compare);

        } else {

            console.log("input data--API is empty");

        }

    });

}

function compare() {

    

}

readAPI();