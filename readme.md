const router = require('express').Router();

let orders = [
{
	id: 1,
	customer_name: "Peralta",
	product_ordered: "Keyboard",
	customer_address: "Sibulan"
}];

//filter

router.get('/',(req, res)=>{
	let result = orders;

if(req.query.customer_name) {
	result = orders.filter(x=>xcustomer_name == req.query.customer_name);
}

res.status(200).json({
success: true,
data: result
	});
});

//get one

router.get('/:id', (req, res) => {
    let order = orders.find(x=> x.id == req.params.id);

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
        id: orders.length + 1,
        customer_name,
        product_ordered,
        customer_address
    };

    orders.push(order);

    res.status(201).json({
        success: true,
        data: order
    });
});

// DELETE

router.delete('/:id', (req, res) => {
    orders = orders.filter(x => x.id !=req.params.id);

    res.status(204).send();
});

module.exports = router;
