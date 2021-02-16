import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "./api";

import Form from "./form/Form";
import Nav from "./Nav";
import Table from "./table/Table";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${api}/products`);
      console.log("results", result);
      setProducts(result.data);
    };
    fetchData();
  }, []);
  console.log("PRODUCTS", products);
  return (
    <Router>
      <div className="container px-12 py-3 flex flex-col">
        <Nav />
        <Switch>
          <Route path="/new">
            <Form />
          </Route>
          <Route path="/">
            <Table products={products} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
