const mongoose = require('mongoose');

let PersonaSquema = new mongoose.Schema({
    idPersona: Number,
    tipoDocumento: String,
    documentoIdentificacion: String,
    nombres: String,
    apellidos: String,
    direccion: String,
    correoElectronico: String,
    telefonpFijo: String,
    telefonoCelular: String,
    enlaceSitioWeb: String,
    descripcionPerfil: String
});

module.exports = mongoose.model('persona', PersonaSquema, 'Personas');