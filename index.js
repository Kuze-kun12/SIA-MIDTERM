// Package imports
const express = require('express')

const app = express()

app.use('/', (req, res) => {
    res.status(401).json({
        "success": false,
        "error": {
        "code": "NOT_FOUND",
        "message": "The requested endpoint does not exist on this server."
  }
    })
});


app.use('/', require('./routes/users.routes'))



app.listen(1234, () => {
	console.log('Server is running on http://localhost:1234')
})