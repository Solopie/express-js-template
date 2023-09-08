const config = require("./utils/config");
const morgan = require("morgan");
const express = require("express");

const app = express();

app.set("view engine", "pug");
app.use(morgan("combined"));
app.use((req, res, next) => {
    res.setHeader("X-Robots-Tag", "none");
    next();
});
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

const server = app.listen(config.PORT, () => {
    console.log(`Express running on PORT ${server.address().port}`);
});
