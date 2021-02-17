import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Row = ({
  id,
  brand,
  image,
  name,
  description,
  price,
  onDelete,
}) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          {image ? (
            <div className="flex-shrink-0 h-20 w-20">
              <img className="h-20 w-20 rounded-full" src={image} alt="" />
            </div>
          ) : (
            ""
          )}
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{name}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{brand}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          ${price}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {description}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Link to={`/edit/${id}`}>
          <button className="text-indigo-600 hover:text-indigo-900">
            Modificar
          </button>
        </Link>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          onClick={onDelete}
          className="text-red-600 hover:text-indigo-900"
        >
          Borrar
        </button>
      </td>
    </tr>
  );
};

Row.propTypes = {
  brand: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default Row;
