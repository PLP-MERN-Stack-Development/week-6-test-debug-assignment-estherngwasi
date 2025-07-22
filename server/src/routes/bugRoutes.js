const express = require('express');
const router = express.Router();
const bugController = require('../controllers/bugController');

router.post('/bugs', bugController.createBug);
router.get('/bugs', bugController.getBugs);
router.put('/bugs/:id', bugController.updateBug);
router.delete('/bugs/:id', bugController.deleteBug);

module.exports = router; 