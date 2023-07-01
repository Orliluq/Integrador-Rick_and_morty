const { RegisterUser } = require('../DB_connection');
const bcrypt = require('bcrypt');

const postRegister = async (req, res) => {
    try {
        const { username, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = {
            username,
            password: hashedPassword,
        };

        const alreadyExist = await RegisterUser.findOne({ where: { username } });

        if (alreadyExist) {
            return res.status(409).json({ message: 'Usuario ya existe' });
        }

        const newRegisterUser = await RegisterUser.create(user);

        return res.status(201).json(newRegisterUser);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = postRegister;

