import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="lg:flex lg:items-center lg:justify-between mb-4">
      <div className="flex-1 min-w-0">
        <Link to="/">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Mini Catálogo
          </h2>
        </Link>
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

        <span className="ml-3 relative sm:hidden">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            id="mobile-menu"
            aria-haspopup="true"
          >
            More
          </button>

          <div
            className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
            aria-labelledby="mobile-menu"
            role="menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Edit
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              View
            </a>
          </div>
        </span>
      </div>
    </div>
  );
}
