const Workout = require('../models/workout');

module.exports = {
    index,
    show, 
    new: newWorkout,
    create,
    delete: deleteWorkout,
    update,
};

async function index(req, res) {
    console.log("inside workouts controler index");
    try {
        const workouts = await Workout.find({});
        res.render('workouts/index', {
            workouts
        });
    }catch (err) {
        res.send(err);
    }
}

async function show(req, res) {
    const foundWorkout = await Workout.findById(req.params.id);
    res.render('workouts/show', { workout: foundWorkout})
}

async function update(req, res) {
    console.log('updatedWorkout');
    try{
        await Workout.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.redirect('/workouts')
    }catch (err) {
        res.send(err);
    }
}

function deleteWorkout(req, res) {
    console.log("inside delete workout");
    Workout.findByIdAndDelete(req.params.id, function (err, workouts) {
      if (err) {
        console.log(err);
      }
      res.redirect("/workouts/");
    });
  }

function newWorkout(req, res) {
    res.render('workouts/new');
};

async function create(req, res) {
    try {
        const workout = await Workout.create(req.body);
        res.redirect(`workouts/${workout._id}`);
    } catch (err) {
        res.send(err);
    }
};
