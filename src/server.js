const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const server = express();

mongoose.connect('mongodb+srv://bootcamp:bootcamp@cluster0-9973c.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true
})
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);