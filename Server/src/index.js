// solo vamos a tener al puerto establecido
// y la conexión a la bd
const server = require('./app');
const { conn } = require('./DB_connection'); 

const PORT = 3001;


conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => 
  console.log('Server raised in port: ' + PORT))
});



// server.listen(PORT, async () => {
//   await conn.sync({ force: true });
//   console.log('Server raised in port: ' + PORT);
// });

// server.listen(PORT, () => {
//   sequelize.sync({force: true});
//   console.log(`Listening on port ${PORT}`);
// });





// server.listen(PORT, () => {
//   conn.sync({ force: true });
//   console.log('Server raised in port: ' + PORT)
// });
