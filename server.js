const Display = require("./app/routing/htmlRoutes.js");
const ModAPI = require("./app/routing/apiRoutes");

let htmlRoutes = new Display();
let apiRoutes = new ModAPI();

htmlRoutes.dispSurvey();
//htmlRoutes.dispElse();
htmlRoutes.listenDisp();
htmlRoutes.getAPI();

apiRoutes.dispAPI();