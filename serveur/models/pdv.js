// const { Stock } = require('./');
module.exports = (sequelize, DataTypes) => {
    const Pdv = sequelize.define("Pdv", {
     gerant: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // // email: {
      // //   type: DataTypes.STRING,
      // //   allowNull: false,
      // //   unique: true
      // // },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      MSISDN: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true
      },      
      id_wilaya: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adresse: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Registre_commerce: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      code_Dealer: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      nom_Dealer: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      black_lister: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      
         
    },

  
    ); 
     
    Pdv.associate = (models) => {
      // Pdv.hasOne(models.StockCarteRecharge, {
      //   onDelete: "cascade",
      // });
     Pdv.belongsTo(models.DetailDealer, {
        onDelete: "cascade", 
      });
    }; 

    return Pdv;
  };  
