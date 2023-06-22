
module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define("Client", {
      
     Nom: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
      },
     Prenom: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
      },
      Adresse: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
      },
      Wilaya: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
      },
      Date_naissance : {
        type: DataTypes.DATEONLY,
        allowNull: false,
        unique: false
      },

      NumPi: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },

    });

    Client.associate = (models) => {

      Client.hasMany(models.VenteRecharge, {
        onDelete: "cascade",
         

      });
      Client.hasMany(models.VenteSim, {
        onDelete: "cascade",

      });
      Client.belongsTo(models.NaturePi, {
        onDelete: "cascade",

      });
    }
    return Client;
  };