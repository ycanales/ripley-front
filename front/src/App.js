import "./App.css";
import Nav from "./Nav";
import Header from "./table/Header";
import Row from "./table/Row";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3001/products");
      console.log("results", result);
      setProducts(result.data);
    };
    fetchData();
  }, []);
  console.log("PRODUCTS", products);
  return (
    <div className="container px-12 py-3 flex flex-col">
      <Nav />
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <Header />
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map(
                  ({ id, marca, imagen, nombre, descripcion, precio }) => (
                    <Row
                      key={id}
                      brand={marca}
                      image={imagen}
                      name={nombre}
                      description={descripcion}
                      price={precio}
                    />
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
