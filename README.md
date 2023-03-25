## Backend for Northwind Assignment
Run npm install and npm run dev to run the server. It should be listening on port 5000.
It could be documented better with Swagger. Instead of just putting app.use route middleware should help the code better but I found it to be not neccessary since there are 2 paths only. I haven't implemented typescript here too. Custom error message also should be used.

http://localhost:5000/api/orders/ should return and array of orders which will include order object. It shoud look like this.\
   [{
   ShipAddress: string;
   ShipCity: string;
   ShipRegion: string,
   ShipPostalCode: string,
   ShipCountry: string,
   ContactName: string,
   OrderID: number,
   ShippedDate: string | null
   ProductList: Product[{ProductName: string}],
   }]
   http://localhost:5000/api/orders/{OrderID} will return you with a specific order.
