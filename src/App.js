import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import React from "react";
import Assignment4 from "./Labs/a4";
import Assignment5 from "./Labs/a5";
import UserTable from "./users/table";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
         <Route path="/"         element={<Navigate to="/Labs"/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/Labs/a4"   element={<Assignment4/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
          <Route path="/Labs/a5"   element={<Assignment5/>}/>
          <Route path="/Kanbas/admin/users" element={<UserTable />}/>
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;