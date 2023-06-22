
module.exports = (sequelize, DataTypes) => {
    const Etat = sequelize.define("Etat", {
        etat: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          },
    });
 

    return Etat; 
  }; 