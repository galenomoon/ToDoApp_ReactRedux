import "modules/bootstrap/dist/css/bootstrap.min.css"; //bootstrap -- CSS
import "modules/font-awesome/css/font-awesome.min.css"; //font-awesome -- CSS

import React from "react";
import Todo from '../todo/todo'
import About from '../about/about'

export default (props) => ( // Brackets is like an implicit "return"
  <div className="container">
    <Todo/>
    <About/>
  </div>
);
