import express from 'express';
const Server = express();

Server.set("view engine", "ejs");
Server.use(express.static("public"));


Server.get('/', (req, res) => {
    res.render("Home");
})

Server.get("/buy", (req, res) => {
    res.render("index");
});

Server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
