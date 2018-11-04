const display = require("./app/routing/htmlRoutes.js");
const modAPI = require("./app/routing/apiRoutes");

display.dispSurvey();

display.createAPI();
display.getAPI();

display.listenDisp();