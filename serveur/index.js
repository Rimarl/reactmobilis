
const express = require("express");
const app = express();
const Produit=require("./routes/produit");
const Ocr = require("./routes/ocr")
const Stock=require("./routes/stock");
const Sim =require("./routes/sim");
const Carte=require("./routes/carte");
const Client = require("./routes/client");
const Login = require("./routes/login");
const ClientRecharge = require("./routes/ClientRecharge");
const pdfRoute = require('./routes/pdfRoutes');
const cors = require("cors");
require("dotenv").config();
app.use(express.json());

const db = require("./models");
const { Sequelize } = require('sequelize');
require("dotenv").config(); 
app.use(express.json());
app.use(cors());
app.use("/produit", Produit); 
app.use("/stock", Stock); 
app.use("/sim", Sim); 
app.use("/carte", Carte); 
app.use("/client", Client); 
app.use("/login", Login);
app.use("/ocr", Ocr);
app.use("/clientrecharge",ClientRecharge); 
app.use("/pdfRoute",pdfRoute); 
app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});


db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});