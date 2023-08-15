// Import necessary components from the 'mongoose' library
const { Schema, model } = require('mongoose');

// Define the schema for the 'User' model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true, // Ensure usernames are unique
      trim: true, // Trim leading and trailing whitespace
    },
    email: {
      type: String,
      unique: true, // Ensure email addresses are unique
      match: [/.+@.+\..+/, 'Must match an email address!'], // Use regex pattern to validate email format
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought', // Establish a reference to the 'Thought' model
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User', // Establish a self-reference to the 'User' model for friends
      },
    ],
  },
  {
    // Define options for the schema
    toJSON: {
      virtuals: true, // Include virtual properties when converting to JSON
    },
    id: false, // Exclude the '_id' field from the JSON representation
  }
);

// Define a virtual property 'friendCount' that returns the number of friends
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Create the 'User' model using the defined schema
const User = model('User', userSchema);

// Export the 'User' model to be used in other parts of the application
module.exports = User;
