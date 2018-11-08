const express = require("express");

const app = express();
const PORT = 3050;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const htmlRoutes = require("./app/routing/htmlRoutes.js");
const apiRoutes = require("./app/routing/apiRoutes");

htmlRoutes.dispSurvey(app);

apiRoutes.getFriends(app);

apiRoutes.createAPI(app);

htmlRoutes.dispElse(app);

app.listen(PORT, function () {

    console.log("App listening on PORT " + PORT);

});