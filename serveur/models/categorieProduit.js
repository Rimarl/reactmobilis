module.exports = (sequelize, DataTypes) => {
  const CategorieProduit = sequelize.define("CategorieProduit", {
    nomCategorie: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  });


  return CategorieProduit;
};
