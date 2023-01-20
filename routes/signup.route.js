const { Router } = require("express");
const userModel = require("../model/signup.model");
const app = Router();
const bcrypt = require("bcrypt");

app.get("/", (req, res) => {
  res.send("welcome to signup");
});
app.post("/", async (req, res) => {
  const { email, password } = req.body;
  const exists = await userModel.findOne({ email });
  if (!exists) {
    let user;
    bcrypt.hash(password, 4, (err, hash) => {
      user = userModel.create({ email, password: hash });
    });
    return res.send({ msg: "signup successful" });
  }

  return res.send({ msg: "already have an account please signin" });
});
module.exports = app;
