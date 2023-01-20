const { Router } = require("express");
const todoModel = require("../model/todo.model");
const app = Router();

app.get("/", async (req, res) => {
  const todos = await todoModel.find();
  res.send({ message: "todos", data: todos });
});
app.get("/:id", async (req, res) => {
    const {id}=req.params;
  const todos = await todoModel.findOne({_id:id});
  res.send({ message: "todos", data: todos });
});
app.post("/", async (req, res) => {
  const todos = await todoModel.create(req.body);
  res.send({ message: "todos", data: todos });
});

app.patch("/:id", async (req, res) => {
    const {id}=req.params;
   
  const todos = await todoModel.findOneAndUpdate(id,req.body,{new:true});
  res.send({ message: "todos", data: todos });
});
app.delete("/:id", async (req, res) => {
    const {id}=req.params;
   
  const todos = await todoModel.findOneAndDelete(id);
  res.send({ message: "deleted"});
});
module.exports = app;
