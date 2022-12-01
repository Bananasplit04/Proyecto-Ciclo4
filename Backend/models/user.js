const mongoose = require('mongoose');
const Joi = require('joi');

const usuarioSchema = mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    usuario:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},
    {
        timestamps: true,
        versionKey: false,
    }
);

const Usuario = mongoose.model("usuarios",usuarioSchema);

const validator = (data)=> {
    const schema = Joi.object({
        nombre:Joi.string().required(),
        usuario:Joi.string().required(),
        email: Joi.string().email().required(),
        password:Joi.string().required()
    })
    const fecha = new Date();
    dia = fecha.toLocaleString();
    console.log(
        fecha.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
    );
    console.log("Fecha en tu tiempo local:",dia.slice(0 , 9));
    return schema.validate(data)
};
const validatorSigin = (data)=> {
    const schema = Joi.object({
        usuario:Joi.string().required(),
        password:Joi.string().required()
    })
    return schema.validate(data)
};

module.exports = { Usuario, validator, validatorSigin };