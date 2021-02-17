import React, { useEffect, useState } from "react";

import Form from "./form/Form";
import Nav from "./Nav";
import Table from "./table/Table";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container px-12 py-3 flex flex-col">
        <Nav />
        <Switch>
          <Route path="/new">
            <Form />
          </Route>
          <Route path="/edit/:id">
            <Form />
          </Route>
          <Route path="/">
            <Table />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
