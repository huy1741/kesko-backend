const db = require("./db");

function getAll() {
  const data = db.query(
    `
  SELECT OrderID, Orders.CustomerID, Customers.ContactName,
  ShippedDate, ShipAddress, ShipCity, 
  ShipRegion, ShipPostalCode, ShipCountry 
  FROM Orders, Customers
  WHERE Orders.CustomerID = Customers.CustomerID`,
    []
  );
  const filterData = data.map((item) => ({
    ...item,
    ProductList: db.query(`SELECT Products.ProductName 
  FROM [Order Details]
  INNER JOIN Products
  ON [Order Details].ProductID=Products.ProductID
  WHERE [Order Details].OrderID=${item.OrderID}`),
  }));
  return {
    filterData,
  };
}
function getProfuctInfo(orderId) {
  const singleOrder = db.query(
    `
  SELECT OrderID, Orders.CustomerID, Customers.ContactName,
  ShippedDate, ShipAddress, ShipCity, 
  ShipRegion, ShipPostalCode, ShipCountry 
  FROM Orders, Customers
  WHERE Orders.CustomerID = Customers.CustomerID AND Orders.OrderID=${orderId} `,
    []
  );
  const data = singleOrder.map((item) => ({
    ...item,
    ProductList: db.query(`SELECT Products.ProductName 
  FROM [Order Details]
  INNER JOIN Products
  ON [Order Details].ProductID=Products.ProductID
  WHERE [Order Details].OrderID=${orderId}`),
  }));
  return {
    data,
  };
}
module.exports = {
  getAll,
  getProfuctInfo,
};
