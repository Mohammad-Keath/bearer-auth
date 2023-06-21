require('dotenv').config()
const express =require('express')
const {start} = require('./src/server')
const {sequelize} = require('./src/models/index')
const port = process.env.PORT
sequelize.sync()
  .then(()=>{
      start(port)
  })