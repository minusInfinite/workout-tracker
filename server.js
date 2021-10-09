const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static("public"))

mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
        useNewUrlParser: true,
    })
    .catch((err) => console.error(err))

// routes
//app.use(require("./routes/api.js"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
})
