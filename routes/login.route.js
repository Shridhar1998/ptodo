const { Router } = require("express");
const app = Router();
const userModel = require("../model/signup.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
app.get("/", (req, res) => {
  res.send("login connected");
});
app.post("/", async (req, res) => {
  const { email, password } = req.body;
  let user = await userModel.findOne({ email });

  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = jwt.sign({ email, id: user._id }, "SECRET123", {
        expiresIn: "10days",
      });
      console.log(token);
      return res.send({ message: "logged in", token });
    } else {
      return res.send("check your password");
    }
  } else {
    return res.send("login failed");
  }
});

module.exports = app;
