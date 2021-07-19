var express = require('express');
var router = express.Router();
const workoutsCtrl = require('../controllers/workouts');

/* GET users listing. */
router.get('/', workoutsCtrl.index);
router.get('/new', workoutsCtrl.new);
router.get('/:id', workoutsCtrl.show);
router.post('/', workoutsCtrl.create);
router.delete('/delete/:id', workoutsCtrl.delete);
//router.delete('/delete/:id', workoutsCtrl.delete);
router.put('/:id', workoutsCtrl.update);

module.exports = router;



