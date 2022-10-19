const { MongoClient } = require("mongodb");
const Db = process.env.CON_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var database;

module.exports = {
  connectToServer: function (cb) {
    client.connect(function (err, db) {
      if (db) {
        database = db.db("blog");
        console.log("Successfully connected to MongoDB.");
      }
      return cb(err);
    });
  },

  getDb: function () {
    return database;
  },
};
