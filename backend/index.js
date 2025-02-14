const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const port = 3000;

// this middleware is used to parse the data from the frontend into a json format
app.use(express.urlencoded({ extended: false })); // extended false means you can't post "nested object"
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../frontend/views"));
app.use(express.static("../frontend/public"));

require("dotenv").config();

const indexRoutes = require("./Routes/index");

app.use(indexRoutes);

app.listen(port, () => console.log("Server Listening on PORT ", port));
