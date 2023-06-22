module.exports = (sequelize, DataTypes) => {
    const NaturePi = sequelize.define("NaturePi", {
      nomNaturePi: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    });
  
  
    return NaturePi;
  };