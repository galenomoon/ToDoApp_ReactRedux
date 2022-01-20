const Todo = require("./todo");
Todo.methods(["get", "post", "put", "delete"]);
Todo.updateOptions({ new: true, runValidators: true }); //Updates

module.exports = Todo;
