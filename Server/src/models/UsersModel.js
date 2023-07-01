const { DataTypes } = require('sequelize');

// sequelize es la instancia que recibe
module.exports = (sequelize) => {
   // a partir de esa instancia definimos al modelo
   sequelize.define(
      'User', 
      {
         // atributos
      id: {
         type: DataTypes.INTEGER, // tipo de dato
         allowNull: false, // constraist
         primaryKey: true,
         autoIncrement: true,
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            isEmail: true,
            notEmpty: true,
            notNull: true,
         },
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            notEmpty: true,
            notNull: true,
      },
   }
   }, { timestamps: false });
};