const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");

const app = express();

app.use(cors({
  credentials: true,
  origin: 'http://localhost:8081'
}));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const User = db.user;

// db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   // initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Sistem Informasi Sekolah SMKN 1 Jetis." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/guru.routes')(app);
require('./app/routes/jurusan.routes')(app);
require('./app/routes/kelas.routes')(app);
require('./app/routes/mapel.routes')(app);
require('./app/routes/thn_ajar.routes')(app);
require('./app/routes/siswa.routes')(app);
require('./app/routes/walas.routes')(app);
require('./app/routes/nk.routes')(app);
require('./app/routes/tempat_prakerin.routes')(app);
require('./app/routes/absensi.routes')(app);
require('./app/routes/jurnal_harian.routes')(app);
require('./app/routes/izin.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// function initial() {
//   User.create({
//     id: 1,
//     username: "Admin",
//     email: "admin@gmail.com",
//     password: "12345678",
//     confPassword: "12345678",
//     role: "admin"
//   });

//   User.create({
//     id: 2,
//     username: "Guru",
//     email: "guru@gmail.com",
//     password: "12345678",
//     confPassword: "12345678",
//     role: "guru"
//   });

//   User.create({
//     id: 3,
//     username: "Walas",
//     email: "walas@gmail.com",
//     password: "12345678",
//     confPassword: "12345678",
//     role: "walas"
//   });
// }