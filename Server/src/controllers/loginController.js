const users = require('../utils/users');

const login = (req, res) => {
  const { email, password } = req.query;

  const userFound = users.find((user) => user.email === email &&
  user.password === password)

  // return userFound
  // ? res.status(200).json({ access: true })
  // : res.status(404).json({ access: false })

  if(userFound) return res.status(200).json({ access: true })
  return res.status(404).json({ access: false })
}

module.exports = {
  login
};




// const data = require("../utils/users");

// function login(req, res) {
//   const {email, password} = req.query;

//   const found = data.find(
//     (user) => user.email === email && user.password === password
//   );

//   const access = found ? true : false;
//   res.status(200).json({access});
// }

// module.exports = login;

