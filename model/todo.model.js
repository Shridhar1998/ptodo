const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
  title: String,
  status: { type: Boolean, default: false }
});
const todoModel = mongoose.model("todos", todoSchema);
module.exports = todoModel;





