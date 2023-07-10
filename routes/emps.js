const express = require('express');

var appforemps = express.Router();

var connection = require('./db');

appforemps.get("/",(request,response)=>{
    connection.query("select * from Employee_tb",(error,result)=>{
        if(error==null)
        {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }
        else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
    })
})

appforemps.post("/",(request,response)=>{
    var query = `insert into Employee_tb values 
    (${request.body.id},'${request.body.e_name}','${request.body.email}','${request.body.password}','${request.body.emp_id}','${request.body.dname}','${request.body.doj}')`;
    connection.query(query,(error,result)=>{
        if(error==null)
        {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }
        else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
    })
})

appforemps.delete("/:id",(request,response)=>{
   
    var query = `delete from Employee_tb where id = ${request.params.id}`;
    
    connection.query(query,(error,result)=>{
        if(error==null)
        {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }
        else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
    })
})


appforemps.put("/:id",(request,response)=>{
   
    
    var query = `update Employee_tb set dname = '${request.body.dname}',
    doj = '${request.body.doj}' where id = ${request.params.id}`;
    connection.query(query,(error,result)=>{
        if(error==null)
        {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }
        else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
    })
})

module.exports = appforemps;