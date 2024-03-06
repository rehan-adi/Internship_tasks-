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

      const exteraUser = users.find(user => user.name === name);
      if(exteraUser){
          return res.status(400).json({ message: 'User already exists' });
      }
      const newUser = { name, age};
      users.push(newUser);
      return res.status(201).json({message : 'User created successfully'})
})

Server.post("/login", (req, res) => {
    const {name, age} = req.body;
     const find = users.find(user => user.name === name && user.age === age);
     if(!find){
        return res.status(400).json({message: 'Invalid Credisials'});
     }
     const token = jwt.sign({users: find}, 'jwtsecret', {expiresIn: '1h'})
     res.status(200).json({message: 'Login Successfully', token});
})



Server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
