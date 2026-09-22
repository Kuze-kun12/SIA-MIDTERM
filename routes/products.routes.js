const router = require('express').Router();

let products = [
    {
        id: 1,
        name: "Shampoo",
        price: 150
    }
];

router.get('/', (req, res) => {
    let result = products;

    if (req.query.name) {
        result = products.filter(x => x.name == req.query.name);
    }

    res.status(200).json({
        success: true,
        data: result
    });
});

router.get('/:id', (req, res) => {
    let product = products.find(x => x.id == req.params.id);

    if (!product) {
        return res.status(404).json({
            success: false
        });
    }

    res.status(200).json({
        success: true, 
        data: product
    });
});

router.post('/', (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({
            success: false
        });
    }

    const product = {
        id: products.length + 1,
        name,
        price
    };

    products.push(product);

    res.status(201).json({
        success: true,
        data: product
    });
});

router.delete('/:id', (req, res) => {
    products = products.filter(x => x.id != req.params.id);

    res.status(204).send();
});

module.exports = router;
