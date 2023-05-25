const { readFileSync } = require('fs');
const http = require('http');

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const style = readFileSync('./navbar-app/styles.css');
const logo = readFileSync('./navbar-app/logo.svg');
const js = readFileSync('./navbar-app/browser-app.js');


const server = http.createServer((req, res) => {
    //request
    if(req.url === '/'){
    res.writeHead(200, {'content-type':'text/html'});
    res.write(homePage)
    res.end() 
    }
    //css
    else if(req.url === '/styles.css'){
        res.writeHead(200, {'content-type':'text/css'});
        res.write(style)
        res.end() 
    }
    //js
    else if(req.url === '/browser-app.js'){
        res.writeHead(200, {'content-type':'text/js'});
        res.write(js)
        res.end() 
    }
    //logo
        else if(req.url === '/logo.svg'){
            res.writeHead(200, {'content-type':'image/svg+xml'});
            res.write(logo)
            res.end() 
        }
    //about
    else if(req.url === '/about'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write('<h1>About  page</h1>')
        res.end() 
    }
    //404
     else{
        res.writeHead(404, {'content-type':'text/html'});
        res.write('<h1>opps, page not found</h1>')
        res.end()
    }
    
});

server.listen(5000)

        //first server using express
        const express = require('express');
        const app = express();


        //app.get
        app.get('/', (req,res) => {
            res.send('Home Page')
        });

        app.get('/about', (req,res) => {
            res.send('About Page')
        });

        app.get('/', (req,res) => {
            res.send('Home Page')
        });

        app.all('*', (req,res) => {
            res.status(404).send('<h1>resource not found</h1>')
        })

        //app.post
        //app.put
        //app.delete
        //app.all
        //app.use
        //app.listen
        app.listen(5100, () => {
            console.log('the server is listening on port 5000...')
        })

        //easier approach
        const express = require('express');
        const path = require('path');
        const apps = express();

        // getting the css, js and other paths located inside the html file
        apps.use(express.static('./public'))

        apps.get('/', (req,res) => {
            //sending our html file
        });

        apps.all('*', (req,res) => {
            res.status(404).send('<h1>Resource not found</h1>')
        })

        apps.listen(5000, ()=> {
            console.log('server is listenning on port 5000...')
        })


        //queryString and route parameters
        const express = require('express');
        const app1 = express();
        const {products} = require('./data')

        app1.get('/', (req, res) => {
            res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
        })

            //return the data in a more inbound way
        app1.get('/api/products/', (req, res) => {
            const newProduct = products.map(function (prod){
                const {id, name, image} = prod;
                return {id, name, image}
                });
                res.json(newProduct)
            });
        //return the first element of the array
        app1.get('/api/products/:productID', (req, res) => {

        const {productID} = req.params;
                //if someone asks a product that does not
        const singleProd = products.find(function(prod){
            return prod.id === Number(productID)
        })

        if(!singleProd){
            return res.status(404).send('<h1>Product does not exist</h1>')
        }

        res.json(singleProd)
    })

    app1.listen(5000, () => {
        console.log('Server listens to port 5000...')
    });