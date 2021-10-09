const apiRouter = require("express").Router()
const { Aggregate } = require("mongoose")
const Workout = require("../models/Workout.js")

apiRouter.post("/workouts", ({ body }, res) => {
    Workout.create(body)
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

apiRouter.put("/workouts/:id", async (req, res) => {
    try {
        const doc = await Workout.findById(req.params.id)
        console.log(req.body)
        doc.exercises.push(req.body)
        const save = await doc.save()
        res.status(200).json(save)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
})

apiRouter.get("/workouts", (req, res) => {
    Workout.find({})
        .sort({ day: -1 })
        .limit(1)
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

apiRouter.get("/workouts/range", (req, res) => {
    Workout.find({})
        .where("day")
        .gt(new Date(new Date().setDate(new Date().getDate() - 7)))
        .sort({ day: 1 })
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

module.exports = apiRouter
