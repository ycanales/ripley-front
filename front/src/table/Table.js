import React, { useEffect, useState } from "react";
import Header from "./Header";
import Row from "./Row";
import axios from "axios";
import api from "../api";
import { Link, useHistory, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
};

export default function Table() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const query = useQuery();
  const history = useHistory();

  const fetchData = debounce(async (query = "") => {
    console.log("fetchData", query);
    let queryString = "";
    if (query) {
      queryString = `/?buscar=${query}`;
      history.push(queryString);
    }
    const result = await axios.get(`${api}/products${queryString}`);
    console.log("results", result);
    setProducts(result.data);
  }, 500);

  useEffect(() => {
    const buscar = query.get("buscar");
    if (buscar) {
      console.log("setting search", buscar);
      setSearch(buscar);
      fetchData(buscar);
    } else {
      fetchData();
    }
  }, []);

  const onDelete = async (id) => {
    await axios.delete(`${api}/products/${id}`);
    await fetchData();
  };

  const onSearch = async (e) => {
    const value = e.target.value;
    console.log("value", value);
    setSearch(value);

    // En caso de texto debe ser de 3 o mas caracteres para
    // iniciar búsqueda, si es ID numérico siempre buscar.
    // Tambien ejecutamos busqueda si se borra todo el input.
    if (
      value === "" ||
      (value.length < 3 && !isNaN(value)) ||
      value.length >= 3
    ) {
      await fetchData(value);
    } else {
      console.log("Aun no iniciamos busqueda");
    }
  };

  return (
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between mb-8 mt-2">
          <div className="mt-5 flex lg:mt-0 lg:ml-4">
            <span className="hidden sm:block ml-3"></span>

            <span className="sm:ml-3">
              <input
                placeholder="Buscar"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium bg-gray-100 hover:bg-gray-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onChange={onSearch}
                value={search}
              />
            </span>
          </div>

          <div className="mt-5 flex lg:mt-0 lg:ml-4">
            <span className="hidden sm:block ml-3"></span>

            <span className="sm:ml-3">
              <Link to="/new">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Nuevo Producto
                </button>
              </Link>
            </span>
          </div>
        </div>
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <Header />
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map(
                ({
                  id,
                  marca,
                  imagen,
                  nombre,
                  descripcion,
                  precio,
                  precioDescuento,
                }) => (
                  <Row
                    key={id}
                    id={id}
                    brand={marca}
                    image={imagen}
                    name={nombre}
                    description={descripcion}
                    price={precio}
                    discountPrice={precioDescuento}
                    onDelete={() => onDelete(id)}
                  />
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center text-gray-500 mt-5 mb-2">
        Cristian Yanez 2020
      </div>
    </div>
  );
}
