
module.exports = (sequelize, DataTypes) => {
    const Etatmsisdn = sequelize.define("Etatmsisdn", {
      etat: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      
    

    });

    
    return Etatmsisdn;
  };