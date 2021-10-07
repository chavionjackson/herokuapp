const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())

app.use('/api/*', (req, res) => {
    res.json({ data: "This is the API data" })
})

app.listen(port, () => {
    console.log(`Server is alive and well! on port ${port}`)
})

// console.log("I will survive!")
// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USER);
// console.log(process.env.PORT);
// console.log(process.env.DB_PASS);


