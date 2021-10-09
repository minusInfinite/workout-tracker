const path = require("path")
const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
require("dotenv").config()

const PORT = process.env.PORT || 3001

const app = express()
app.use(morgan("dev"))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "/public/index.html"))
)
app.get("/exercise", (req, res) =>
    res.sendFile(path.join(__dirname, "/public/exercise.html"))
)
app.get("/stats", (req, res) =>
    res.sendFile(path.join(__dirname, "/public/stats.html"))
)

mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch((err) => console.error(err))

//routes
app.use(require("./routes/"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
})
