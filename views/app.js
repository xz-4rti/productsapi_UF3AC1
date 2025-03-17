const express = require('express')
const slugify = require('slugify');
const products_routes = require('./routes/products.js')

//Server instantiation
const app = express()

// Use environment variable for PORT
const PORT = process.env.PORT || 5000;

//Server configuration: template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('/views'));

//Midleware
app.use(express.json())
app.use('/', products_routes)

app.get('/', (req, res) => {
    const welcomeMessage = "Bienvenido al servidor Express";
    const slugifiedMessage = slugify(welcomeMessage, { replacement: '*', lower: true });
    res.send(slugifiedMessage);
});

//Server startup
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});



