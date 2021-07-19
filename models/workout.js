const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: String,
    description: String,
}, {
    timestamps: true,
})

const workoutSchema = new Schema({
    typeOfWorkout: String,
    exercises: [exerciseSchema],
    reps: { type: Number, default: 0 },
    sets: { type: Number, default: 0 },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Workout', workoutSchema);