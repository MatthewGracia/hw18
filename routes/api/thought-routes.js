// Import the Router from the 'express' library
const router = require('express').Router();

// Import the thought controller methods
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controller');

// Routes for managing thoughts

// GET all thoughts or POST a new thought
router.route('/').get(getThoughts).post(createThought);

// GET, PUT, or DELETE a single thought by its ID
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// Route for adding a reaction to a thought
router.route('/:thoughtId/reactions').post(addReaction);

// Route for removing a specific reaction from a thought
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

// Export the router with defined routes
module.exports = router;
