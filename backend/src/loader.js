//loader.js will be who load principals settings files
const server = require("./config/server");
require("./config/database"); //ref db
require("./config/routes")(server); // function server
