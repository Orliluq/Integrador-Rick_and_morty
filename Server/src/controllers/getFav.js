const { Favorite, User } = require('../DB_connection');

const getFav = async (req, res) => {
  const { userId } = req.query;
  try {
    const allFavorites = await Favorite.findAll({
      include: [
        {
          model: User,
          where: { id: userId },
          attributes: ['id', 'name'] 
        }
      ]
    });
    res.status(200).json(allFavorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getFav;

