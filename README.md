
Social Network Web Application README
Welcome to the Social Network Web Application! This application allows users to share their thoughts, react to friends' thoughts, and create a friend list. It is built using Express.js for routing, MongoDB for the database, and the Mongoose ODM (Object Data Modeling) library.

Table of Contents
Features
Technologies Used
Getting Started
Installation
Configuration
Running the Application
API Endpoints
Contributing
License
Features
User Accounts: Users can create accounts, log in, and log out.
Thought Sharing: Users can post their thoughts and view thoughts from other users.
Reactions: Users can react to thoughts with various reactions.
Friendships: Users can send and accept friend requests, creating a friend list.
User Profile: Users can view and update their profile information.
Technologies Used
Express.js: A web application framework for handling routing and server-side logic.
MongoDB: A NoSQL database used to store user information, thoughts, and reactions.
Mongoose: An ODM (Object Data Modeling) library for MongoDB, simplifying interaction with the database.
Other dependencies: Other libraries and packages used for authentication, validation, and more.


The application will be accessible at http://localhost:3000 (or a different port if specified).

API Endpoints
/api/users: User-related routes

GET /: Get a list of all users or create a new user.
GET /:userId: Get user details by ID, update user details, or delete a user.
POST /:userId/friends/:friendId: Add a friend to a user's friend list.
DELETE /:userId/friends/:friendId: Remove a friend from a user's friend list.
/api/thoughts: Thought-related routes

GET /: Get all thoughts or create a new thought.
GET /:thoughtId: Get thought details by ID, update a thought, or delete a thought.
POST /:thoughtId/reactions: Add a reaction to a thought.
DELETE /:thoughtId/reactions/:reactionId: Remove a reaction from a thought.
Refer to the API documentation for detailed information on request and response formats.

Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or create a pull request.

License
This project is licensed under the MIT License.