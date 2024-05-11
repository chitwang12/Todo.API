const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  due_date: {
    type: Date,
    validate: {
      validator: function (value) {
        // Check if the due_date is a future date
        return value > Date.now();
      },
      message: "Due date must be in the future",
    },
  },
  status: {
    type: String,
    enum: ["Todo", "In-Progress", "Completed"],
    default: "Todo",
    required : true
  },
  Priority: {
    type: String,
    default: "Low",
    enum: {
      values: ["Low", "Medium", "High"],
      message: "Priority must be one of: Low, Medium, High",
    },
    required: true,
  },
  Completed: {
    type: Boolean,
    default: false,
  },
});

//Export Mongoose
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
