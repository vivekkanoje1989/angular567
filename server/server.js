const express = require('express');
const bodyParser =  require('body-parser');
const cors = require('cors');

const PORT = 3001;
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res)=>{
    res.send("Hello! From Server");
});

app.post('/enroll', (req, res)=>{
    console.log(req.body);
    res.status(200).send({"message": "recieved data"});
})

app.post('/register', (req, res)=>{
    console.log(req.body);
    res.status(200).send({"message": "recieved data"});
})

app.listen(PORT, ()=>{ console.log(`Server started listenning on localhost: ${PORT}`)});