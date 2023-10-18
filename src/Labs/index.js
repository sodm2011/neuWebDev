import Assignment3 from "./a3";
import React from "react";
import Nav from "../Nav";
import Classes from "./a3/Classes";
import Styles from "./a3/Styles";
import ConditionalOutput from "./a3/ConditionalOutput";
import TodoList from "./todos/TodoList";

function Labs() {
 return(
     <div>
          <Nav/>
          <h1>Assignment 3</h1>
          <TodoList/>
          <ConditionalOutput/>
          <Styles/>
          <Classes/>
          <Assignment3/>
     </div>
 )
}
export default Labs;