const express = require("express");
const connect = require("./db/db");
const signupRoute = require("./routes/signup.route");
const loginRoute = require("./routes/login.route");
const todoRoute = require("./routes/todo.route");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/signup", signupRoute);
app.use("/login", loginRoute);
app.use("/todos", todoRoute);

app.get("/", (req, res) => res.send("hello"));

app.listen(8080, async () => {
  await connect();
  console.log("server started on port 8080");
});
