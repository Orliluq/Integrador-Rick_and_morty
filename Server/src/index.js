const server = require('./app');
const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server raised in port: ${PORT}`);
});

// const server = require("./src/app");

// const PORT = 3001;

// server.listen(PORT, () => {
//   console.log("Server raised in port: " + PORT);
// });