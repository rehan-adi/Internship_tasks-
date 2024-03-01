import express from 'express';
import jwt from 'jsonwebtoken';
const Server = express();

Server.set("view engine", "ejs");
Server.use(express.static("public"));


Server.get('/', (req, res) => {
    res.render("Home");
})

Server.get("/buy", (req, res) => {
    res.render("index");
});

Server.get('/user', (req, res) => {
    const user = {
        name: "Rehan",
        age: 17,
    };
    try {
        const token = jwt.sign(user, 'jwtkey', { expiresIn: '1h' });
        res.send({ token });
    } catch (error) {
        console.error("Error generating JWT:", error);
        res.status(500).send("Internal Server Error");
    }

})

Server.get('/check', (req, res) => {

   const token = req.headers.authorization;

   jwt.verify(token, 'jwtkey', (err, decoded) => {
        if(err){
            res.status(401).send('Invalid Token');
        }
        res.json(decoded);
   })

})

Server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
