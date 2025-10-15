const express = require('express');
const app = express();
const port = 3000;

// Middleware a JSON kezeléshez
app.use(express.json());

// GET endpoint - Főoldal
app.get('/', (req, res) => {
    res.json({ message: 'Üdvözöl a szerver!' });
});

// GET endpoint - Termékek listázása (példa adatokkal)
app.get('/products', (req, res) => {
    const products = [
        { id: 1, name: 'Laptop', price: 299999 },
        { id: 2, name: 'Mobiltelefon', price: 159999 },
        { id: 3, name: 'Tablet', price: 89999 }
    ];
    res.json(products);
});

// GET endpoint - Egyedi termék lekérése ID alapján
app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    // Példa: egy termék visszaadása
    const product = {
        id: productId,
        name: `Termék ${productId}`,
        price: Math.floor(Math.random() * 100000)
    };
    res.json(product);
});

// GET endpoint query paraméterekkel - Termékek szűrése ár alapján
app.get('/products/filter/price', (req, res) => {
    const minPrice = parseInt(req.query.min) || 0;
    const maxPrice = parseInt(req.query.max) || Infinity;
    
    const products = [
        { id: 1, name: 'Laptop', price: 299999 },
        { id: 2, name: 'Mobiltelefon', price: 159999 },
        { id: 3, name: 'Tablet', price: 89999 }
    ].filter(product => product.price >= minPrice && product.price <= maxPrice);
    
    res.json(products);
});

// Szerver indítása
app.listen(port, () => {
    console.log(`A szerver fut a következő porton: ${port}`);
});