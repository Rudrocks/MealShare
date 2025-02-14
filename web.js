const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://22cs076:Sigma_22@cluster0.t45owln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(res =>{
        console.log("Connected To MongoDB")
    })
    .catch(err =>{
        console.error(err);
    });

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
});

app.get('/l',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','Login.html'))
});

app.get('/su',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','Signup.html'))
});

app.get('/a',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','About.html'))
});

app.get('/dn',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','Donation.html'))
});
app.get('/r',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','request.html'))
});
app.get('/c',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','Contact.html'))
});
app.get('/ch',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','choose.html'))
});
app.get('/ad',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','admindash.html'))
});
app.get('/ud',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','userdash.html'))
});

app.post('/su',(req,res)=>{

});

app.listen(5000,()=>{
    console.log("Server Running on http://localhost:5000");
});

