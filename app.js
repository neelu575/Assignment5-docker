const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;

const productsData = JSON.parse(fs.readFileSync('products.json')).products;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get('/products', (req, res) => {
  res.render('products', { listData: productsData });
});

app.get('/products/:product_id', (req, res) => {
  const product = productsData.find(p => p.id === req.params.product_id);
  if (!product) {
    res.render('ErrorPage');
  } else {
    res.render('products', { listData: [product] });
  }
});

app.get('/products/:product_id/orders', (req, res) => {
  const product = productsData.find(p => p.id === req.params.product_id);
  if (!product) {
    res.render('ErrorPage');
  } else {
    const saleDetails = product.orders;
    res.render('OrderPage', { listData: saleDetails, Id: product.id });
  }
});

app.get('/products/:product_id/orders/:order_id', (req, res) => {
  const product = productsData.find(p => p.id === req.params.product_id);
  if (!product) {
    res.render('ErrorPage');
  } else {
    const order = product.orders.find(s => s.order_id === req.params.order_id);
    if (!order) {
      res.render('ErrorPage');
    } else {
      res.render('OrderPage', { listData: [order], Id: product.id });
    }
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
