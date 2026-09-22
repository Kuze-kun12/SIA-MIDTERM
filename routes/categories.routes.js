const router = require('express').Router();

let categories = [
    {
        id: 1,
        name: "Personal Care",
        description: "Hygiene and grooming products"
    }
];

// GET ALL + FILTER BY NAME
router.get('/', (req, res) => {
    let result = categories;

    if (req.query.name) {
        result = categories.filter(x => x.name == req.query.name);
    }

    res.status(200).json({
        success: true,
        data: result
    });
});

// GET ONE
router.get('/:id', (req, res) => {
    let category = categories.find(x => x.id == req.params.id);

    if (!category) {
        return res.status(404).json({
            success: false
        });
    }

    res.status(200).json({
        success: true, 
        data: category
    });
});

// POST
router.post('/', (req, res) => {
    const { name, description } = req.body;

    if (!name || !description) {
        return res.status(400).json({
            success: false
        });
    }

    const category = {
        id: categories.length + 1,
        name,
        description
    };

    categories.push(category);

    res.status(201).json({
        success: true,
        data: category
    });
});

// DELETE
router.delete('/:id', (req, res) => {
    categories = categories.filter(x => x.id != req.params.id);

    res.status(204).send();
});

module.exports = router;
