const express = require("express");
const app = express();
const morgan =require("morgan");
const handlebars = require("express-handlebars");
const route = require("./routes");
const path = require("path");
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("combined"));

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());


// Template Engine
app.engine("hbs", handlebars.engine({
    extname: ".hbs"
}))
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Routes Init
route(app);

app.listen(port, () => {
    console.log(`Example app listening as https://localhost:${port}`);
})