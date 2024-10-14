// import and config dotenv
require('dotenv').config()

// import express
const express = require('express')

// import cors
const cors = require('cors')

// import routes
const router = require('./routes')


// import connection.js 
require('./connection')

// server
const GloboMartServer = express()
GloboMartServer.use(cors())
GloboMartServer.use(express.json())
GloboMartServer.use(router)


// Port
const PORT = 4000 || process.env.PORT

// run the server
GloboMartServer.listen(PORT,()=>{
    console.log('Server Running Succesfully at port',PORT);
    
})