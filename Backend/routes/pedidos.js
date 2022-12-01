const express = require("express");
const router = express.Router();
const { Pedido, validator } = require("../models/pedido");
const validate = require("../middleware/validate");
const isValidObjectId = require("../middleware/isValidObjectId");
const asyncHandler = require("../middleware/asyncHandler");

// Crear un pedido
router.post(
  "/",
  validate(validator),
  asyncHandler(async (req, res) => {
    await Pedido(req.body).save();
    res.status(200).send("Cliente creado");
  })
);

// Obtener todos los pedidos
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const pedidos = await Pedido.find();
    res.send(pedidos);
  })
);

//Obtener  pedido por id
router.get(
  "/:id",
  isValidObjectId,
  asyncHandler(async (req, res) => {
    res.json(await Pedido.findById(req.params.id));
  })
);

// Actualizar un pedido

router.put(
  "/:id",
  isValidObjectId,
  asyncHandler(async (req, res) => {
    await Pedido.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).send("actualizacion exitosa");
  })
);

module.exports = router;
