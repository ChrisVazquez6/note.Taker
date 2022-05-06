const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');




const app= express()

const path= require('path')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req, res) =>{
    res.sendFile()
})

app.listen(process.env.PORT || 3000)