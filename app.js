const express = require('express')
const app = express()
const Shopify = require('shopify-api-node');
require('dotenv').config()

const shopify = new Shopify({
  shopName: process.env.shopName,
  apiKey: process.env.apiKey,
  password: process.env.password
});

const PORT = 5000

app.get('/', (req,res)=>{
    res.send('<h1>Our Code is running...</h1>')
})

app.get('/products', async(req, res) =>{
   await shopify.product
  .list({ limit: 5 })
  .then((products) => res.send(products))
  .catch((err) => console.error(err));
})

app.listen(PORT,() => {
    console.log(`Server is running at ${PORT}`)
})