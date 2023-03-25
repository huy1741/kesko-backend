const express = require("express");
const app = express();
const orders = require("./sqlQuery/orders");
const notFound = require("./middleware/not-found");
// extra security packages
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

//routes

app.get("/api/orders", function (req, res, next) {
  const data = orders.getAll();
  try {
    if (data && data.filterData.length > 0) {
      res.json(data);
    } else {
      throw new Error();
    }
  } catch (err) {
    res.status(404).send({ error: "Error getting orders" }).end();
  }
  /*try {
    res.json(orders.getAll());
  } catch(err) {
    createCustomError(`Error getting orders`, 404)
  }*/
});
app.get("/api/orders/:id", (req, res, next) => {
  const orderId = req.params.id;
  const data = orders.getProfuctInfo(orderId);
  try {
    if (data && data.data.length > 0) {
      res.json(data);
    } else {
      res
        .status(404)
        .send({ error: `Error getting order with id: ${orderId}` })
        .end();
    }
  } catch (error) {
    next(error);
  }
});
app.use(notFound);

const port = 5000;

const start = async () => {
  try {
    app.listen(port, console.log(`server is listenting on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
