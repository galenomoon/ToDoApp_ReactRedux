// Mongo Settings - Mapping files | Connection | Send Commands | API | easy | no schema 
const mongoose = require("mongoose"); //calling mongoose
mongoose.Promise = global.Promise; //API promise of mongo (removing Waring)
module.export = mongoose.connect("mongodb://localhost/todo");
