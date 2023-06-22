
module.exports = (sequelize, DataTypes) => {
    const VenteRecharge = sequelize.define("VenteRecharge", {
      datevente: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: true
      },
      
    

    });

    VenteRecharge.associate = (models) => {
        VenteRecharge.belongsTo(models.StockPDV, {
          onDelete: "cascade",
           

        });
      
            
        VenteRecharge.belongsTo(models.Client, {
                  onDelete: "cascade",
                   
        
                });

   
       }; 
    return VenteRecharge;
  };