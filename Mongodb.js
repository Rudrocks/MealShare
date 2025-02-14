const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://22cs076:Sigma_22@cluster0.t45owln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(res =>{
        console.log("Connected To MongoDB")
    })
    .catch(err =>{
        console.error(err);
    });
