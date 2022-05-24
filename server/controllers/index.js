const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const UsersModel = require('../model/user-model')

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://mujtaba:mujtaba110@cluster0.qdcto.mongodb.net/?retryWrites=true&w=majority")

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("mongodb connection established successfully");
})

app.get('/getUsers', (req, res) =>{
    UsersModel.find({}, (err, user) =>{
        if(err){
            res.json(err);
        }else{
            res.json(user);
        }
    })
})


app.post('/createUser', async (req, res) =>{
    const user = req.body
    const newUser = new UsersModel(user);
    await newUser.save();
    res.json(user);
})

app.listen(3002, ()=>{
    console.log('Server listening on port 3002');
})