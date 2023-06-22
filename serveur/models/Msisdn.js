
module.exports = (sequelize, DataTypes) => {
    const Msisdn = sequelize.define("Msisdn", {
      
     numero: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true
      },

    });

    
    Msisdn.associate = (models) => {
      Msisdn.belongsTo(models.Etatmsisdn, {
        onDelete: "cascade",
         

      });
        
       
    };
       







       
        
   
    
    return Msisdn;
  };