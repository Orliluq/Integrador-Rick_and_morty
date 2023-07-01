require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const UsersModel = require('./models/UsersModel');
const FavoriteModel = require('./models/FavoriteModel');
const RegisterUserModel = require('./models/RegisterUserModel');

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
  { logging: false, native: false }
);


UsersModel(sequelize);
FavoriteModel(sequelize);
RegisterUserModel(sequelize);

const { User, Favorite, RegisterUser } = sequelize.models;

User.belongsToMany(Favorite, { through: 'user_favorite', timestamps: false });
Favorite.belongsToMany(User, { through: 'user_favorite', timestamps: false });
RegisterUser.belongsToMany(User, { through: 'register_user_favorite', timestamps: false });

module.exports = {
  User,
  Favorite,
  RegisterUser,
  conn: sequelize,
};
