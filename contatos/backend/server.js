const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

requireDir('./src/models');

const uri = 'mongodb://localhost:27017/contatos'

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/', require('./src/routes/rotas'));

app.listen(3333);