import express from "express";
import ejs from "ejs"

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.render("C:\Coding\vbc\pubic\index.ejs");
})

app.listen(port, () => {
    console.log("server running at port: ", port);
})