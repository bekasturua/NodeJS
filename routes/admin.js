const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("In the another middleware!");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});

app.post("/product", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;
