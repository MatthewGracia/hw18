// Import necessary components from the 'mongoose' library
const { Schema, model } = require('mongoose');

// Import the 'reactionSchema' from the specified file './Reaction'
const reactionSchema = require('./Reaction');

// Import the 'dateFormat' utility function from the specified file '../utils/dateFormat'
const dateFormat = require('../utils/dateFormat');

// Define the schema for the 'Thought' model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'You need to leave a thought!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp) // Use the 'dateFormat' function to format the timestamp
    },
    username: {
      type: String,
    },
    reactions: [reactionSchema] // Embed the 'reactionSchema' as an array of reactions
  },
  {
    // Define options for the schema
    toJSON: {
      getters: true // Include virtual properties when converting to JSON
    },
    id: false // Exclude the '_id' field from the JSON representation
  }
);

// Define a virtual property 'reactionCount' that returns the number of reactions
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// Create the 'Thought' model using the defined schema
const Thought = model('Thought', thoughtSchema);

// Export the 'Thought' model to be used in other parts of the application
module.exports = Thought;
