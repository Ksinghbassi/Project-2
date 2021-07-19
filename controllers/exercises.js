const Workout = require('../models/workout');

module.exports = {
    create,
};

async function create(req, res) {
    try{
        const workout = await Workout.findById(req.params.id);
        workout.exercises.push(req.body);
        workout.save(function(err) {
        res.redirect(`/workouts/${workout._id}`);
        }); 
    }catch (err) {
        res.send(err);
    }
}