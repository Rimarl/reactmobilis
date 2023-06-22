
module.exports = (sequelize, DataTypes) => {
    const Produit = sequelize.define("Produit", {
      
      nomProduit: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

    });

    Produit.associate = (models) => {
        Produit.belongsTo(models.CategorieProduit, {
          onDelete: "cascade",
        });
        Produit.hasMany(models.StockPDV, {
          onDelete: "cascade",
        });

      
      }; 
    return Produit;
  };