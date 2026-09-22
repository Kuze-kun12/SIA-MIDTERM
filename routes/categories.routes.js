const router = require('express').Router();

let categories = [
{
	id: 1,
	name_product: "beans",
	product_ordered: "shoppe",

}];

//filter

router.get('/',(req, res)=>{
	let result = categories;

if(req.query.customer_name) {
	result = categories.filter(x=>xcustomer_name == req.query.customer_name);
}

res.status(200).json({
success: true,
data: result
	});
});

//get one

router.get('/:id', (req, res) => {
    let order = categories.find(x=> x.id == req.params.id);

    if(!order){
        return res.status(404).json({
            success: false
        });
}

res.status(200).json({
    success: true,
    data: order
    });
});

//POST

router.post('/', (req,res)=> {
    const {customer_name, product_ordered, customer_address } = req.body;

    if (!customer_name||!product_ordered||!customer_address){
        return res.status(400).json({
            success:false
        });
    }

    const order = {
        id: categories.length + 1,
        customer_name,
        product_ordered,
        customer_address
    };

    categories.push(order);

    res.status(201).json({
        success: true,
        data: order
    });
});

// DELETE

router.delete('/:id', (req, res) => {
    categories = categories.filter(x => x.id !=req.params.id);

    res.status(204).send();
});

module.exports = router;
