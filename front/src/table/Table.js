import React from "react";
import Header from "./Header";
import Row from "./Row";

export default function Table({ products, onDelete }) {
  return (
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
                    id={id}
                    brand={marca}
                    image={imagen}
                    name={nombre}
                    description={descripcion}
                    price={precio}
                    onDelete={() => onDelete(id)}
                  />
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
