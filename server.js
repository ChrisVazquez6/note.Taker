const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');


const notes = require('./db/db.json')

const app= express()

const path= require('path');
const { text } = require('express');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req, res) =>{
    res.sendFile(path.join(__dirname,'public', 'index.html'))
})

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'))
})

app.get('/api/notes',(req, res)=>{
  res.json(notes)
})

app.post('/api/notes',(req, res)=>{
  let note = {
  title: req.body.title,
  text: req.body.text,
  }
  notes.push(note)
  res.json(200)
})

app.listen(process.env.PORT || 3000)