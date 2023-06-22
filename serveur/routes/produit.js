const { Produit , CategorieProduit , StockPDV  , Pdv}= require("../models");
const express = require("express");
const { Op } = require('sequelize');
const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const produit = await Produit.findAll({
        attributes: ['id',"nomProduit"],
        include: [
          {
            model: CategorieProduit,
            attributes: ["nomCategorie"],
          },
          
           
        ],
      });
      res.status(200).json(produit);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }

    router.get("/cartesim", async (req, res) => {
      try {
        try {
          const produit = await Produit.findAll({
            attributes: ['id',"nomProduit"],
            where: {CategorieProduitId : 1 },
            include: [
              {
                model: CategorieProduit,
                attributes: ["nomCategorie"],
              },
              
               
            ],
          });
          res.status(200).json(produit);
          
        } catch (err) {
          res.status(404).json({ message: err.message });
        };
        
      } catch (err) {
        res.status(404).json({ message: err.message });
      }
    
    });
    
    
    router.get("/carterecharge", async (req, res) => {
      try {
        try {
          const produit = await Produit.findAll({
            attributes: ['id',"nomProduit"],
            where: {CategorieProduitId : 2 },
            include: [
              {
                model: CategorieProduit,
                attributes: ["nomCategorie"],
              },
              
               
            ],
          });
          res.status(200).json(produit);
          
        } catch (err) {
          res.status(404).json({ message: err.message });
        };
        
      } catch (err) {
        res.status(404).json({ message: err.message });
      }
    
    });
    //////////////////////////////////////////////////////////////////////////
    // router.get("/detailrecharge/:id", async (req, res) => {
    //   try {
    //     try {
    //       const produit = await  StockPDV.findAll(
            
            
    //         { attributes: ['id' , "num_serie"],
    //         where: { ProduitId:req.params.id , 
    //         EtatId :  2 } });
    //       res.status(200).json(produit);
    //     } catch (err) {
    //       res.status(404).json({ message: err.message });
    //     };
        
    //   } catch (err) {
    //     res.status(404).json({ message: err.message });
    //   }
    
    // });
    
    // router.get("/detail/:id", async (req, res) => {
    //   try {
    //     try {
    //       const produit = await StockPDV.findAll(
            
            
    //         { attributes: ['id' , "num_serie"],
    //         where: { ProduitId:req.params.id , 
    //         EtatId :  2 } });
    //       res.status(200).json(produit);
    //     } catch (err) {
    //       res.status(404).json({ message: err.message });
    //     };
        
    //   } catch (err) {
    //     res.status(404).json({ message: err.message });
    //   }
    
    // });
  
  });

// router.get("/stockPdv/:id", async (req, res) => {
//   try {
//     const stockSim = await StockPDV.findAll({
//       attributes: ['id' ,'num_serie'],
//       where: { ProduitId: req.params.id  , 
//       EtatId : 2 ,},
//       include: [{
//         model: Produit,
//         attributes: ['nomProduit' ],

        
        
//       },
      
//        ],
//     });
    
//     const stockRecharge = await StockPDV.findAll({
//       attributes: ['num_serie'],
//       where: { ProduitId: req.params.id },
//       include: [{
//         model: Produit,
//         attributes: ['nomProduit'],
        
//       },
//       ],
//     });

//     const stockPdv = stockSim.concat(stockRecharge);
    
//     res.status(200).json(stockPdv);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }

// });
 
router.get("/Stockgeneralpdv/:MSISDN", async (req, res) => {
  try {
    const stockSim = await StockPDV.findAll({
      attributes: ['num_serie'],
      include: [{
        model: Produit,
        attributes: ['nomProduit' ],
     
        include : [ { 
          model : CategorieProduit , 
          attributes: ['nomCategorie'],
    
         }]
     
      },
      
      {
        model: Pdv,
        attributes: [],
        where: { MSISDN: req.params.MSISDN },
      }],
     



    });
    
    const stockRecharge = await StockPDV.findAll({
      attributes: ['num_serie'],
      include: [{
        model: Produit,
        attributes: ['nomProduit'],
      },
      {
        model: Pdv,
        attributes: [],
        where: { MSISDN: req.params.MSISDN },
      }],
    });

    const stockPdv = stockSim.concat(stockRecharge);
    
    res.status(200).json(stockPdv);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }

});


module.exports = router;