import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Navbar from "./Navbar";

const App = () => (
    <div className="row">
      <Navbar />
      <div className="col-md-4 offset-md-2 mt-5">
        <h2>Fetched tasks</h2>
        <Tasks /> 
      </div>
      <div className="col-md-4 offset-md-1 mt-5">
        <h2>Add a new task</h2>
        <Form />
      </div>
      
    </div>
);

export default App;