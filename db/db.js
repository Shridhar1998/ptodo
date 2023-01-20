const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
function connect() {
  return mongoose.connect(
    "mongodb+srv://shreedhar:shreedhar@cluster0.urmb4ef.mongodb.net/test"
  );
  // return mongoose.connect("mongodb://localhost:27017/Nem201");
}
module.exports = connect;
