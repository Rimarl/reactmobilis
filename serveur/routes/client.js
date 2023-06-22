const { Client , VenteSim, StockSim ,Msisdn} = require('../models/');
const express = require('express');


const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const client = await Client.findAll({
        
        
      });
      res.status(200).json(client);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
})
  
router.post('/detail/client', async (req, res) => {
  const {name, prenom, adresse ,myWilaya , DATE,  PI , NumPI , ICCID , MSISDN} = req.body;
  
  if (!name || !prenom || !adresse || !DATE ||  !myWilaya || !PI || !NumPI || !ICCID || !MSISDN) {
      return res.status(400).json({ error: 'Missing required fields'+{MSISDN} });
  }
console.log({MSISDN})
  Client.create({
     Nom: name,
     Prenom: prenom,
     Adresse: adresse,
     Wilaya: myWilaya,
     Date_naissance:DATE ,
     Pi:  PI ,
     NumPi: NumPI
  })
  .then(async () => {
      const client = await Client.findOne({
        where: { Nom : name , Prenom: prenom }
      });

      const stocksim = await StockSim.findOne({
        where: { num_serie: ICCID}
      });
      const ms = await Msisdn.findOne({ 
         where : {numero :  MSISDN }
      });
      const v = await VenteSim.create({
        datevente : new Date(),
        ClientId: client.id,
        StockSimId: stocksim.id ,
         MsisdnId : ms.id,
      });
        // Mise à jour du champ etat de l'enregistrement correspondant
        await StockSim.update({ EtatId: 4 }
          , { where: { num_serie: ICCID }});

          await Msisdn.update({EtatmsisdnId : 2}
            
            ,{where : { numero : MSISDN}})

            if (!ms) {
              return res.status(404).json({ error: 'Msisdn not found' });
            }

      return res.status(201).json({ message: 'Data inserted successfully' });
  })
  .catch(err => {
      console.log(err)
      return res.status(500).json(err);
  });
});


module.exports = router;
