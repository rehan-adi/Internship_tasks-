// ES6 Module
import Express from "express";
// Common js
// const fs = require('fs')

const expressPower = Express();
const port = 3333;

// Middlwere 
expressPower.use((req, res, next) => {
    //  Other logic 
    next()
  })

expressPower.get('/', (req, res) => {
     res.send('Hellowwww from express server')
}).get('/about', (req, res) => {
     res.send('This is about page')
})


expressPower.get('/user', (req, res) => {
    res.send('This is user page')
})

expressPower.get('/user:id', (req, res) => {
    const data = req.params.id;
    res.send(`Hi ${data}, how are you !`)
})

expressPower.listen(port, () => {
     console.log(`Server is running localhost:${port} `);
})
