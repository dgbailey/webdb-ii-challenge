const express = require('express');
const userDb = require('./userDb');
const server = express();
const port = '8000'
server.use(express.json());

server.get('/users/',(req,res) =>{
    userDb.get(req.query.limit).then(data => res.status('200').json(data)).catch(err => res.status('500').json(err));
})

server.listen(port,() => console.log(`listening on port ${port}`));