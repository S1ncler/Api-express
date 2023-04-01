const express = require('express');
const app = express()
const morgan=require('morgan');

//configuracion de la api
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

//rutas

app.get('/', (req, res) =>{
    res.json(
        {
            "Title": "Hola"
        }
    )
})

app.get('/ruta2', (req, res) =>{
    res.json(
        {
            "Title": "Mundo"
        }
    )
})

app.get('/ruta3', (req, res) =>{
    res.json(
        {
            "Title": "JS"
        }
    )
})
app.get('/ruta4', (req, res) =>{
    res.json(
        {
            "Title": "Prueba"
        }
    )
})
app.get('/ruta5', (req, res) =>{
    res.json(
        {
            "Title": "Rutas"
        }
    )
})


//inicializacion del servidor
app.listen(app.get('port'),() =>{
    console.log(`Server listening on port ${app.get('port')}`)
})