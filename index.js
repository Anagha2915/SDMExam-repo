const express = require('express');
var empsRelatedRoutes = require('./routes/emps');
const config = require('config');

var app = express();

app.use((request, response, next)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
    response.setHeader('Access-Control-Allow-Headers',"*");
    response.setHeader('Access-Control-Allow-Methods', "*")
    next();
})

app.use(express.json());

app.use('/emps',empsRelatedRoutes);

const portno = config.get("PORT")
app.listen(portno,()=>{
    console.log("Server is listening at port no 9999");
})
