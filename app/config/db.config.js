const production = true
module.exports = {
  HOST: production ? 'us-cdbr-east-06.cleardb.net' : 'localhost',
  USER: production ? 'b867b26fa345c5' : 'root',
  PASSWORD: production ? 'bc2ce362' : '',
  DB: production?"heroku_7d2703ae6d7a5da":"moato2",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};


//mysql://b867b26fa345c5:bc2ce362@us-cdbr-east-06.cleardb.net/heroku_7d2703ae6d7a5da?reconnect=true