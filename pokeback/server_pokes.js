// Server
const express = require('express');
const cors = require('cors');
// const { Pelicula, Director } = require('./models/index');
const PORT = process.env.PORT
const app = express();

app.use(cors());

// Configuracion para aceptar el body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Endpoint Crear Usuario
app.post('/username', (req, res) => {
    const newPelicula = Pelicula(req.body);
    newPelicula.save((err, peli) => {
        err
            ?
            res.status(400).send(err) :
            res.status(201).send(peli)
    });
});

// Endpoint Obtiene todas los usuarios
app.get('/getAllUsers', (req, res) => {
    Pelicula.find().exec()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.status(404).send(err)
        });
});

// Endpoint Obtiene Usuario por id
// 
app.get('/username/:id', (req, res) => {
    const id = req.params.id
    Pelicula.findById(id).exec()
        .then((result) => {
            result
                ?
                res.status(200).send(result) :
                res.status(404).send(`No existe algún usuario con id ${id}`)
        })
        .catch((err) => {
            res.status(500).send(err)
        });
});

// Endpoint Modifica Usuario
app.patch('/usuario/:id', (req, res) => {
    const id = req.params.id
    Pelicula.findByIdAndUpdate(
            id, { $set: req.body }, { new: true }
        ).exec()
        .then((result) => {
            res.status(200).send(result)
        })
        .catch((err) => {
            res.status(500).send(err)
        });
});

// =========================================== Endpoints Teams ===========================================================




// Solo para Heroku
// app.listen(PORT, () => {
//     console.log('Server Peliculas ON')
// });

// Solo para Local
app.listen(3000, () => {
    console.log('Server Pokemon ON Port 3000')
});