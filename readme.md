const express = require ('express');
const router = express.Router();

let orders = [ 
{id: 1, product: "laptop", quantity:2, status: "completed"},
{id: 2, product: "Phone", quantity: 1, status: "pending"}
];

router.get('/',(req, res) => { let result = orders;
if (req.query.status) { result = orders;
result = result.filter(o => o.status === req.query.status); }

res.status(200).json({success:true, data: result, meta : { timestamp: new Date().tolSOString(), count: result.length }});



