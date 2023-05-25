const express = require('express');
const app = express();
const {products} = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

    //return the data in a more inbound way
app.get('/api/products/', (req, res) => {
    const newProduct = products.map(function (prod){
        const {id, name, image} = prod;
         return {id, name, image}
        });
        res.json(newProduct)
});
    //return the first element of the array
    app.get('/api/products/:productID', (req, res) => {

    const {productID} = req.params;
            //if someone asks a product that does not exist
    const singleProd = products.find(function(prod){
        return prod.id === Number(productID)
    })

    if(!singleProd){
        return res.status(404).send('<h1>Product does not exist</h1>')
    }

    res.json(singleProd)
})

app.listen(5000, () => {
    console.log('Server listens to port 5000...')
});