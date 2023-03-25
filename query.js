const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./db/northwind.db');

/* let sql = `SELECT Orders.ShipAddress FROM Products WHERE Products.Name = 'Aniseed Syrup'
INNER JOIN [Order Details] ON  Products.ID = [Order Details].ProductID
INNER JOIN Orders ON [Order Details].OrderID = Oders.OrderID
`; */

let sql = `SELECT * FROM Orders`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  console.log(rows)
});

// close the database connection
db.close();