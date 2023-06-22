
module.exports = (sequelize, DataTypes) => {
    const DetailDealer = sequelize.define("DetailDealer", {
        description_type_dealer: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          },
    });
 

    return DetailDealer; 
  }; 