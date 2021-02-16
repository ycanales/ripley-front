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

  const fetchData = async () => {
    const result = await axios.get(`${api}/products`);
    console.log("results", result);
    setProducts(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("PRODUCTS", products);

  const onDelete = async (id) => {
    await axios.delete(`${api}/products/${id}`);
    await fetchData();
  };

  return (
    <Router>
      <div className="container px-12 py-3 flex flex-col">
        <Nav />
        <Switch>
          <Route path="/new">
            <Form />
          </Route>
          <Route path="/">
            <Table products={products} onDelete={onDelete} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
