const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    // operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
// db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.refreshToken = require("../models/refreshToken.model.js")(sequelize, Sequelize);
db.guru = require("../models/guru.model")(sequelize, Sequelize);
db.jurusan = require("../models/jurusan.model")(sequelize, Sequelize);
db.kelas = require("../models/kelas.model")(sequelize, Sequelize);
db.mapel = require("../models/mapel.model")(sequelize, Sequelize);
db.thn_ajar = require("../models/thn_ajar.model")(sequelize, Sequelize);
db.siswa = require("../models/siswa.model")(sequelize, Sequelize);
db.walas = require("../models/walas.model")(sequelize, Sequelize);
db.nk = require("../models/nketrampilan.model")(sequelize, Sequelize);
db.tempat_prakerin = require("../models/tempat_prakerin.model")(sequelize, Sequelize);
db.absensi = require("../models/absensi.model")(sequelize, Sequelize);
db.jurnal_harian = require("../models/jurnal_harian.model")(sequelize, Sequelize);
db.izin = require("../models/izin.model")(sequelize, Sequelize);

// db.role.belongsToMany(db.user, {
//   through: "user_roles",
//   foreignKey: "roleId",
//   otherKey: "userId"
// });

// db.user.belongsToMany(db.role, {
//   through: "user_roles",
//   foreignKey: "userId",
//   otherKey: "roleId"
// });

// db.role.hasMany(db.user, { foreignKey: "roleId", as: "user" });
// db.user.belongsTo(db.role, { as: "role", });

//jurusan & kelas
db.jurusan.hasMany(db.kelas, { foreignKey: "jurusanId", as: "kelas" });
db.kelas.belongsTo(db.jurusan, { as: "jurusan", });

// db.user.hasMany(db.jurusan);
// db.jurusan.belongsTo(db.user, { foreignKey: "userId", as: "user" });

//guru & mapel
// db.mapel.hasMany(db.guru, { foreignKey: "mapelId", as: "guru" });
// db.guru.belongsTo(db.mapel, { foreignKey: "mapelId", as: "mapel", });

//izin & siswa
db.siswa.hasOne(db.izin, { foreignKey: "siswaId", as: "izin" });
db.izin.belongsTo(db.siswa, { foreignKey: "siswaId", as: "siswa" });

//jurnal_harian & siswa
db.siswa.hasOne(db.jurnal_harian, { foreignKey: "siswaId", as: "jurnal_harian" });
db.jurnal_harian.belongsTo(db.siswa, { foreignKey: "siswaId", as: "siswa" });

//absensi & siswa
db.siswa.hasOne(db.absensi, { foreignKey: "siswaId", as: "absensi" });
db.absensi.belongsTo(db.siswa, { foreignKey: "siswaId", as: "siswa" });

//siswa & tempat_Prakerin
db.tempat_prakerin.hasMany(db.siswa, { foreignKey: "tempat_pklId", as: "siswa" });
db.siswa.belongsTo(db.tempat_prakerin, { foreignKey: "tempat_pklId", as: "tempat_prakerin" });

//siswa & kelas
db.kelas.hasMany(db.siswa, { foreignKey: "kelasId", as: "siswa" });
db.siswa.belongsTo(db.kelas, { foreignKey: "kelasId", as: "kelas" });

//guru, kelas & tahunajar
db.guru.hasOne(db.walas, { foreignKey: "guruId", as: "walas" });
db.walas.belongsTo(db.guru, { foreignKey: "guruId", as: "guru" });

db.thn_ajar.hasMany(db.walas, { foreignKey: "thnAjarId", as: "walas" });
db.walas.belongsTo(db.thn_ajar, { foreignKey: "thnAjarId", as: "thn_ajar" });

db.kelas.hasOne(db.walas, { foreignKey: "kelassId", as: "walas" });
db.walas.belongsTo(db.kelas, { foreignKey: "kelassId", as: "kelas" });

// relasi nilai ketrampilan
db.user.hasMany(db.nk);
db.nk.belongsTo(db.user, { foreignKey: 'userId', targetKey: 'id', as: "user" });

db.guru.hasMany(db.nk);
db.nk.belongsTo(db.guru, { foreignKey: 'guruId', as: "guru" });

db.siswa.hasMany(db.nk);
db.nk.belongsTo(db.siswa, { foreignKey: 'siswaId', as: "siswa" });

db.kelas.hasMany(db.nk);
db.nk.belongsTo(db.kelas, { foreignKey: 'kelasId', as: "kelas" });

db.mapel.hasMany(db.nk);
db.nk.belongsTo(db.mapel, { foreignKey: 'mapelId', as: "mapel" });

db.thn_ajar.hasMany(db.nk);
db.nk.belongsTo(db.thn_ajar, { foreignKey: 'thnAjarId', as: "thn_ajar" });

//refreshtoken & user
db.refreshToken.belongsTo(db.user, {
  foreignKey: 'userId', targetKey: 'id'
});
db.user.hasOne(db.refreshToken, {
  foreignKey: 'userId', targetKey: 'id'
});

//guru & user
db.user.hasOne(db.guru, { foreignKey: 'userId', targetKey: 'id' });
db.guru.belongsTo(db.user, { foreignKey: 'userId', targetKey: 'id' });

// db.user.hasOne(db.walas, { foreignKey: 'userId', targetKey: 'id' });
// db.walas.belongsTo(db.user, { foreignKey: 'userId', targetKey: 'id' });


db.ROLES = ["walas", "admin", "guru", "kabeng"];

module.exports = db;