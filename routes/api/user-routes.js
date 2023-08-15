// Import the Router from the 'express' library
const router = require('express').Router();

// Import the user controller methods
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');

// Routes for managing users

// GET all users or POST a new user
router.route('/').get(getUsers).post(createUser);

// GET, PUT, or DELETE a single user by their ID
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// Route for adding a friend to a user or removing a friend from a user
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

// Export the router with defined routes
module.exports = router;
