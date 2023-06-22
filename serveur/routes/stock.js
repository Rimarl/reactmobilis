const { Stock , Produit , CategorieProduit} = require("../models");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const stock = await Stock.findAll({
       
        include: [{ 
          model: Produit
        }],
        
      });
      res.status(200).json(stock);
   
  
  
  
  
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  
  });

  router.get("/stock/:id", async (req, res) => {
    try {
      const stock = await Stock.findAll({ where: { ProduitId:req.params.id,EtatId:2} });
      res.status(200).json(stock);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  
  });
 
//   router.get("/detailNomProduit/:id", async (req, res) => {
//     try {
//       const produit = await StockGlobale.findOne({ where: { ProduitId:req.params.id} });
//       const produitNom = await Produit.findOne({ where: { id:produit.ProduitId} });
//       console.log(produitNom.nomProduit);
//       res.status(200).json(produitNom.nomProduit);
      
//     } catch (err) {
//       res.status(404).json({ message: err.message });
//     }
  
//   });


module.exports = router;