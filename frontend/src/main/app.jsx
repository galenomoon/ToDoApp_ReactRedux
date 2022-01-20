import "modules/bootstrap/dist/css/bootstrap.min.css"; //bootstrap -- CSS
import "modules/font-awesome/css/font-awesome.min.css"; //font-awesome -- CSS

import React from "react";
import Routes from "./routes";
import Menu from '../template/menu'

export default (props) => ( // Brackets is like an implicit "return"
  <div className="container">
    <Menu />
    <Routes />
  </div>
);
