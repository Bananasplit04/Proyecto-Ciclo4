const {Usuario} = require("../models/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
const comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
}

const signUp = async (req, res) =>{
  try {
    const {nombre, usuario, email, password} = req.body;
    const userFound = await Usuario.findOne({usuario: req.body.usuario})
    if (userFound) return res.status(401).json("User is created ...");
    if (req.body.password) {
      const newUser = new Usuario({
        nombre,
        usuario,
        email,
        password: await encryptPassword(password)
      });
      await newUser.save();
      return res.status(201).json({
        message: "user is registered",
      });
    }else{
      return res.status(403).json({
        message: "please provide password",
      });
    }
  }catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};
const signIn = async (req, res) =>{
  try {
    const userFound = await Usuario.findOne({usuario: req.body.usuario})
    if (!userFound) return res.status(404).json("user not found");
    matchPassword =  await comparePassword(req.body.password, userFound.password);
    if (!matchPassword){
      return res.status(401).json({message:'Invalido Password'});
    }
    const token = jwt.sign({id:userFound._id}, config.SECRET, {
      algorithm: "HS256",
      expiresIn: "1d"
    });
    return res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json({ message: "token asignado" });
  }catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = { signUp, signIn };