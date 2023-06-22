const {  Produit , StockPDV  } = require("../models");
const express = require("express");
const router = express.Router();
const { Op } = require('sequelize');

router.get("/", async (req, res) => {
    try {
      const stock = await Produit.findAll({
        attributes: ['id' ,"nomProduit"],
        where: {CategorieProduitId :2}
        
      });
      res.status(200).json(stock);
   
  
  
  
  
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  
  });
  router.get("/detailCarte/:nomProduit", async (req, res) => {
    try {
        const { nomProduit } = req.params;
        const produit = await Produit.findAll({
          
          where : { nomProduit : {
            [Op.like]: `${nomProduit}`
          }},
          include: [
            {
              model: StockPDV,
              attributes: [ 'id' , "num_serie"],
              where : { EtatId : 2},
              
            },
            
             
          ],
        });
        res.status(200).json(produit);
      } catch (err) {
        res.status(404).json({ message: err.message });
      }
  
  });
  

module.exports = router;