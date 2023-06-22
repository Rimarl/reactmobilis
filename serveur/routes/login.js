const express = require("express");
// const generateAuthToken = require("../utils/generateAuthToken");
// const { validateToken } = require("../utils/AuthMiddleware");
//const login = require("../controllers/login");
const router = express.Router();
const bcrypt = require("bcrypt");
const { Pdv } = require("../models");
const jwt = require("jsonwebtoken");
 

router.post("/login", async (req, res) => {
  try {
   
    const { MSISDN, password } = req.body;
    const pdv = await Pdv.findOne({ where: { MSISDN: req.body.MSISDN} });
    if (!pdv) return res.status(400).json({ msg: "L'utilisateur n'existe pas ! " });

    
    if (pdv.password!==password) return res.status(400).json({ msg: "Le mot de passe est incorrecte ! " });

    const token = jwt.sign({ id: pdv.id }, process.env.JWT_SECRET_KEY);
    delete pdv.password;
    res.status(200).json({success: true, token, pdv });
  } catch (err) { 
    res.status(500).json({ message: err.message });
  }
}); 

module.exports = router;

