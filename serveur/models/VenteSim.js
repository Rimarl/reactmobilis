
module.exports = (sequelize, DataTypes) => {
    const VenteSim = sequelize.define("VenteSim", {
      datevente: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: true
      },
      id_contrat: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    

    });

    VenteSim.associate = (models) => {
        VenteSim.belongsTo(models.StockPDV, {
          onDelete: "cascade",
           

        });
      
            
              VenteSim.belongsTo(models.Client, {
                  onDelete: "cascade",
                   
        
                });
                VenteSim.belongsTo(models.Msisdn, {
                  onDelete: "cascade",
                   
        
                });

   
       }; 
    return VenteSim;
  };