//Mapping object (mongo doc)

const restful = require("node-restful");
const mongoose = restful.mongoose;

const todoSchema = new mongoose.Schema({
  description: { type: String, required: true }, //description of to do
  done: { type: Boolean, required: true, default: false }, //status of todo
  createdAt: {type: Date, default: Date.now} //Date of todo
});

//Exporting module
module.exports = restful.model('Todo', todoSchema)