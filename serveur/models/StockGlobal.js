
module.exports = (sequelize, DataTypes) => {
    const StcokGlobal= sequelize.define("StcokGlobal", {
      
        num_serie: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          },

    });

    StcokGlobal.associate = (models) => {
      StcokGlobal.belongsTo(models.Produit, {
          onDelete: "cascade",
           

        });
        
        StcokGlobal.belongsTo(models.Etat, {
              onDelete: "cascade",
               
    
            });
      
            

   
       }; 
    return StcokGlobal;
  };