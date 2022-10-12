require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnetion } = require('./database/config')

//Crea el servidor de express
const app= express();

//configurar CORS
app.use(cors());

//base de datos
dbConnetion();

//Definicion de rutas
app.get('/', (req, res)=>{
    //funcion que se va ejecutar cuando alguien haga la solicitud del GET /
    res.json({
        ok: true,
        msg: 'hola mundo'
    })
    
    
});

app.listen( process.env.PORT, ()=>{
    console.log('servidor corriendo en puerto: ' + process.env.PORT);
})