const sqlite = require("better-sqlite3");
const db = new sqlite("./db/northwind.db");

function query(sql) {
  return db.prepare(sql).all([]);
}

module.exports = {
  query,
};
