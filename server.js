const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("index");
});

app.post("/submit", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;

    res.render("result", {
        name: name,
        email: email
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});