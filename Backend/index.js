const express = require ('express')
const connectdb = require('./config/bd')
const dotenv = require("dotenv")
const app = express()



dotenv.config()
const PORT = 5000  || process.env.PORT


app.use(express.json())


connectdb()

app.listen(PORT , () => {
    console.log(`Server Running at PORT ${PORT}`)
})

