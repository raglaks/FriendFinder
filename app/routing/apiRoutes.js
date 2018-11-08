const path = require("path");
const fs = require("file-system");

const modAPI = {

    resObj: [],

    getFriends: function (app) {

        fs.readFile(path.join(__dirname, "../data/friends.txt"), "utf8", function (err, data) {

            if (err) throw err;

            if (data) {

                modAPI.resObj = JSON.parse(data);

            } else {

                console.log("input data--API is empty");

            }

        });

        app.get("/api/friends", function (req, res) {

            res.send(modAPI.resObj);

        });

    },

    createAPI: function (app) {

        app.post("/api/friends", function (req, res) {

            let result = req.body;

            modAPI.resObj.push(result);

            fs.writeFile(path.join(__dirname, "../data/friends.txt"), JSON.stringify(modAPI.resObj), function (err, data) {

                if (err) throw err;

                console.log("updated friends.txt");

                //compareUsers();

                //res.JSON(compare[ind].name, compare[ind].pic);

                fs.readFile(path.join(__dirname, "../data/friends.txt"), "utf8", function (err, data) {

                    let compare;
                    //index is saved as let for future matching purposes
                    let ind;

                    if (err) throw err;

                    if (data) {

                        compare = JSON.parse(data);

                        //lets to easily access the last person's result array, which is also the current user
                        let last = compare.length - 1;
                        let lastEnt = compare[last].resultsArr;

                        //result var for map loop inside for loop is assigned here
                        let result;

                        let sumArr = [];

                        //initial for loop for iterating through all resultsArrs in friends.txt (all users in db)
                        for (i = 0; i < compare.length - 1; i++) {

                            //each array in db is assigned to this let for easy access
                            let prev = compare[i].resultsArr;

                            console.log(prev);

                            //map loop to subtract existing arrays from current user array
                            result = prev.map(function (item, index) {

                                return Math.abs(item - lastEnt[index]);

                            });

                            console.log(result);

                            //reduce function to add all values in result arrays
                            let sum = result.reduce((a, b) => a + b, 0);

                            console.log(sum);

                            //all sums get pushed to array of absolute sum vals
                            sumArr.push(sum);

                        }

                        console.log(lastEnt);
                        console.log(sumArr);

                        //a minimum val if found from this array
                        let min = Math.min.apply(null, sumArr);

                        console.log(min);

                        //for loop to iterate through absolute sum array and find corresponding index
                        for (i = 0; i < sumArr.length; i++) {

                            if (sumArr[i] === min) {

                                ind = i;

                                console.log(ind);

                            }

                        }

                        console.log(`Your best match: ${JSON.stringify(compare[ind].name)}`);

                        res.json(compare[ind]);

                    } else {

                        console.log("input data--API is empty");

                    }

                });
            });

            // function compareUsers() {

            //     fs.readFile(path.join(__dirname, "../data/friends.txt"), "utf8", function (err, data) {

            //         let compare;
            //         //index is saved as let for future matching purposes
            //         let ind;

            //         if (err) throw err;

            //         if (data) {

            //             compare = JSON.parse(data);

            //             //lets to easily access the last person's result array, which is also the current user
            //             let last = compare.length - 1;
            //             let lastEnt = compare[last].resultsArr;

            //             //result var for map loop inside for loop is assigned here
            //             let result;

            //             let sumArr = [];

            //             //initial for loop for iterating through all resultsArrs in friends.txt (all users in db)
            //             for (i = 0; i < compare.length - 1; i++) {

            //                 //each array in db is assigned to this let for easy access
            //                 let prev = compare[i].resultsArr;

            //                 console.log(prev);

            //                 //map loop to subtract existing arrays from current user array
            //                 result = prev.map(function (item, index) {

            //                     return Math.abs(item - lastEnt[index]);

            //                 });

            //                 console.log(result);

            //                 //reduce function to add all values in result arrays
            //                 let sum = result.reduce((a, b) => a + b, 0);

            //                 console.log(sum);

            //                 //all sums get pushed to array of absolute sum vals
            //                 sumArr.push(sum);

            //             }

            //             console.log(lastEnt);
            //             console.log(sumArr);

            //             //a minimum val if found from this array
            //             let min = Math.min.apply(null, sumArr);

            //             console.log(min);

            //             //for loop to iterate through absolute sum array and find corresponding index
            //             for (i = 0; i < sumArr.length; i++) {

            //                 if (sumArr[i] === min) {

            //                     ind = i;

            //                     console.log(ind);

            //                 }

            //             }

            //             console.log(`Your best match: ${JSON.stringify(compare[ind].name)}\nThey look like: ${JSON.stringify(compare[ind].pic)}`);

            //         } else {

            //             console.log("input data--API is empty");

            //         }

            //     });

            // }


        });

    }

}

module.exports = modAPI;