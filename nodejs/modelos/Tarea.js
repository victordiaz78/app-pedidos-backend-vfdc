const mongoose = require('mongoose');

let TareaSquema = new mongoose.Schema({
    idTarea: Number,
    nombreTarea: String,
    detalleTarea: String
});

module.exports = mongoose.model('tarea', TareaSquema, 'Tareas');