import Expres from 'express';
import jwt from 'jsonwebtoken'
import bodyParser from 'body-parser';


const Server = Expres();

Server.use(bodyParser.json());

const user = [
    {name: 'Rehan', age: 18, developer: true},
]

Server.post('/singup', (req, res) => {

    const {name, age, developer} = req.body;
   const existinguser = user.find(user => user.name == name);

   if(existinguser){
    return res.status(400).json({ message: 'User already exists' });
   }
   
   const newUser = { name, age, developer };
   user.push(newUser);
 
   res.status(201).json({ message: 'User created successfully', user: newUser });

})

Server.post('/login', (req, res) => {
    const {name, age, developer} = req.body;
    const check = user.find(user => user.name === name && user.age === age, user.developer === developer);
    if(!check){
        return res.status(401).json({ message: 'Invalid credentials' });
    };
    const token = jwt.sign({ user: check }, "andsand", { expiresIn: '5h' });
    res.status(200).json({ message: 'Login successful', token });
})


Server.listen(3000, () => {
    console.log('Server is live at 3000');
});