// const path = require("path");
// const express = require("express");
const Display = require("./app/routing/htmlRoutes.js");

let htmlRoutes = new Display();

htmlRoutes.dispSurvey();
htmlRoutes.dispElse();
htmlRoutes.listenDisp();

