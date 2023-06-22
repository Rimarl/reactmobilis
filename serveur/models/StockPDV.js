
module.exports = (sequelize, DataTypes) => {
    const StockPDV = sequelize.define("StockPDV", {
      
     num_serie: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

    });

    StockPDV.associate = (models) => {
      StockPDV.belongsTo(models.Pdv, {
          onDelete: "cascade",
           

        });
        StockPDV.belongsTo(models.Etat, {
          onDelete: "cascade",
           

        });
        StockPDV.belongsTo(models.Produit, {
          onDelete: "cascade",
           

        });
       

        






       
        // Produit.hasOne(models.StockCarteRecharge, {
        //   onDelete: "cascade",
        //  })
       
   
       }; 
    return StockPDV;
  };