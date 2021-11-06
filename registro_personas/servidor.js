const express = require('express');
const mongoose = require('mongoose');
const PersonaSchema = require('./modelos/Personas.js')

const app = express();

//rutas
const router = express.Router();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Conexion Base de datos
mongoose.connect("mongodb+srv://usuario:mintic2022@clusterprogweb.klcmy.mongodb.net/RetoSemana1?retryWrites=true&w=majority");


//operaciones CRUD
router.get('/', (req, res) => {
    res.send("Reto Node.js con MongoDB primera Semana MinTIC20222");
});

router.get('/persona', (req, res) => {
    PersonaSchema.find(function(err, datos){
        if(err){
            console.log("Error leyendo las personas");
        }else{
            res.send(datos);
        }
    });
});

router.post('/persona', (req, res) => {
    let nuevaPersona = new PersonaSchema({
        idPersona: req.body.id,
        tipoDocumento: req.body.tipo_documento,
        documentoIdentificacion: req.body.documento_identidad,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion,
        correoElectronico: req.body.email,
        telefonpFijo: req.body.tel_fijo,
        telefonoCelular: req.body.tel_celular,
        enlaceSitioWeb: req.body.sitio_web,
        descripcionPerfil: req.body.descripcion_perfil
    });
    nuevaPersona.save(function(err, datos){
        if(err){
            console.log(err);
        }else{
            res.send("Persona almacenada correctamente. ")
        }
    });
});

router.put('/editar_persona/:id', async (req, res) =>{
    const { id } = req.params;
    const resp = await PersonaSchema.updateOne({_id: id}, {
        idPersona: req.body.id,
        tipoDocumento: req.body.tipo_documento,
        documentoIdentificacion: req.body.documento_identidad,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion,
        correoElectronico: req.body.email,
        telefonpFijo: req.body.tel_fijo,
        telefonoCelular: req.body.tel_celular,
        enlaceSitioWeb: req.body.sitio_web,
        descripcionPerfil: req.body.descripcion_perfil
    });
    if(resp.modifiedCount==1){
        res.send("Se Actualizo correctamente");
    }else{
        res.send("No fue posible la actualizacion");
    }
});

router.delete('/eliminar_persona/:id', async (req, res) =>{
    const { id } = req.params;
    await PersonaSchema.deleteOne({ _id: id }, function (err) {
        if (err){
            res.send("No se pudo eliminar");
        }else{
            res.send("Borrado el regsitro(Documento)")
        };
      });
});


app.use(router);
app.listen(3000, () => {
    console.log("Escuchando puerto 3000");
});