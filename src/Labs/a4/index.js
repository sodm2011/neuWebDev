import React from "react";
import Nav from "../../Nav";
import Add from "./components/Add";
import ClickEvent from "./components/ClickEvent";
import PassingDataOnEvent from "./components/PassingDataOnEvent";
import PassingFunctions from "./components/PassingFunctions";
import EventObject from "./components/EventObject";
import Counter from "./components/Counter";
import BooleanStateVariables from "./components/BooleanStateVariables";
import StringStateVariables from "./components/StringStateVariables";
import DateStateVariable from "./components/DateStateVariable";
import ObjectStateVariable from "./components/ObjectStateVariable";
import ArrayStateVariable from "./components/ArrayStateVariable";
import ReduxExamples from "./ReduxExamples";
import { Provider } from "react-redux";
import store from "../store";
import TodoList from "./ReduxExamples/todos/TodoList";

const Assignment4 = () => {
  function sayHello() {
    alert("Hello");
  }

 return(
  <Provider store={store}>
   <>
    <Nav/>
     <h1>Assignment 4</h1>
     <TodoList/>
     <ReduxExamples/>
     <Add a={1} b={2}/>
     <ClickEvent/>
     <PassingDataOnEvent/>
     <PassingFunctions theFunction={sayHello}/>
     <EventObject/>
     <Counter/>
     <BooleanStateVariables/>
     <StringStateVariables/>
     <DateStateVariable/>
     <ObjectStateVariable/>
     <ArrayStateVariable/>
   </>
   </Provider>
 );
};
export default Assignment4;