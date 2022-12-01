const mongoose = require('mongoose');
const Joi = require('joi');

const pedidoSchema = mongoose.Schema({
    fecha:{
        type: Date,
        default: new Date(),
        timezone: "+0530"
    },
    alto:{
        type:Number,
        required:true
    },
    largo:{
        type:Number,
        required:true
    },
    fondo:{
        type:Number,
        required:true
    },
    peso:{
        type:Number,
        required:true
    },
    estado:{
        type:String,
        required:true
    },
    direcciondestino:{
        type:String,
        required:true
    },
    ciudadestino:{
        type:String,
        required:true
    },
    destinatario:{
        type:String,
        required:true
    },
    cedula:{
        type:String,
        required:true
    },
    direccionentrega:{
        type:String,
        required:true
    },
    ciudadentrega:{
        type:String,
        required:true
    }
},
    {
        timestamps: true,
        versionKey: false,
    }
);

const Pedido = mongoose.model("pedidos",pedidoSchema);

const validator = (data)=> {
    const schema = Joi.object({
        alto:Joi.number().required(),
        largo:Joi.number().required(),
        fondo:Joi.number().required(),
        peso:Joi.number().required(),
        estado:Joi.string().required(),
        direcciondestino:Joi.string().required(),
        ciudadestino:Joi.string().required(),
        destinatario:Joi.string().required(),
        cedula:Joi.string()
        .regex(/^\d+$/)
        .message({"string.pattern.base":"Por favor digite un numero validos"})
        .required(),
        direccionentrega:Joi.string().required(),
        ciudadentrega:Joi.string().required()
    })
    const fecha = new Date();
    dia = fecha.toLocaleString();
    console.log(
        fecha.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
    );
    console.log("Fecha en tu tiempo local:",dia.slice(0 , 9));
    return schema.validate(data)
};


module.exports = { Pedido, validator};

