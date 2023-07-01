const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
   const RegisterUser = sequelize.define(
      'RegisterUser',
      {
         username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
         },
         password: {
            type: DataTypes.STRING,
            allowNull: false,
         },
      },
      {
         modelName: 'RegisterUser',
         hooks: {
            beforeCreate: async (user) => {
               const hashedPassword = await bcrypt.hash(user.password, 10);
               user.password = hashedPassword;
            },
         },
         timestamps: false,
         tableName: 'register_users'
      }
   );

   RegisterUser.prototype.validPassword = async function(password) {
      return await bcrypt.compare(password, this.password);
   };

   return RegisterUser;
};

