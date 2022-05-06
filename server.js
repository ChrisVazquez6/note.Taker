const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');


const notes = require('./db/db.json')

const app= express()

const path= require('path')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req, res) =>{
    res.sendFile(path.join(__dirname,'public', 'index.html'))
})

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'))
})

app.get('/api/notes',(req, res))=>{
  res.json(notes)
}

app.listen(process.env.PORT || 3000)