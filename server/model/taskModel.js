const mongoose = require("mongoose");

module.exports = mongoose.model(
  "task",

  new mongoose.Schema(
    {
      category: {
        type: String,
        enum: ['pending', 'progress', 'completed']
      },
      title: String,
      content: String,
      userid: String
    },
    { timestamps: true }
  )
);
