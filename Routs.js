import express from 'express';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
const Server = express();

Server.set("view engine", "ejs");
Server.use(express.static("public"));

Server.use(bodyParser.json());

const users = [
    {name: 'Rehan', age: 18,},
]


Server.get('/', (req, res) => {
    res.render("Home");
})

Server.get("/buy", (req, res) => {
    res.render("index");
});


Server.post('/singUp', (req, res) => {
    const {name, age} = req.body;

      const exterauser = users.find(user => user.name === name && user.age == age);
      if(exterauser){
          return res.status(400).json({ message: 'User already exists' });
      }
      const newUser = { name, age};
      users.push(newUser);
      return res.status(201).json({message : 'User created successfully'})
})



Server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
