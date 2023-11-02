import Assignment3 from "./a3";
import React from "react";
import Nav from "../Nav";
import Classes from "./a3/Classes";
import Styles from "./a3/Styles";
import ConditionalOutput from "./a3/ConditionalOutput";
import TodoList from "./todos/TodoList";
import Assignment4 from "./a4";
import { Provider } from "react-redux";
import store from "./store";

function Labs() {

 return(
    <Provider store={store}>
     <div>
          <Nav/>
          <TodoList/>
          <ConditionalOutput/>
          <Styles/>
          <Classes/>
          <Assignment3/>
     </div>
    </Provider>
 )
}
export default Labs;