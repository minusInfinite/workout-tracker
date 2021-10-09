const mongoose = require("mongoose")

const Schema = mongoose.Schema

const workoutSchema = new Schema(
    {
        day: { type: Date, default: Date.now },
        exercises: [
            {
                type: { type: String, enum: ["resistance", "cardio"] },
                name: { type: String },
                duration: { type: Number },
                distance: { type: Number },
                weight: { type: Number },
                reps: { type: Number },
                sets: { type: Number },
            },
        ],
    },
    { toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

workoutSchema.virtual("totalDuration").get(function () {
    let sum = 0
    for (let i = 0; i < this.exercises.length; i++) {
        sum = this.exercises[i].duration + sum
    }
    return sum
})

const Workout = mongoose.model("workout", workoutSchema)

module.exports = Workout
