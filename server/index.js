const express = require('express');

const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

app.use(authRouter);


app.use(express.json());
const DB = "mongodb+srv://sfdesigns:test123@login.szfeqbb.mongodb.net/?retryWrites=true&w=majority"



mongoose.connect(DB).then(()=>{

    console.log("Connection successful");
}).catch((err) => {
    console.log("Erroer" + err);
});



app.listen(port,"0.0.0.0",()=>{

    console.log("connected at port " + port);
});


 