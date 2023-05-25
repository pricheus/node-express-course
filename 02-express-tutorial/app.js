const express = require('express');
const app = express();
const middleware = require('./middleware');
const authorize = require('./middleware 2');

    // req => middlewaree => res
    app.use([middleware, authorize])

    app.get('/', (req,res) => {
      
        res.send('<h1>Home page</h1>');
        
    });
    app.get('/api/products', (req,res) => {
        res.send('<h1>product</h1>')
    });
    app.get('/about', (req,res) => {
        res.send('<h1>About page</h1>')
    });
    app.get('/api/items', (req,res) => {
        res.send('<h1>Item</h1>')
    });




app.listen(5000,() => {
    console.log('server listens to port 5000...')
});
