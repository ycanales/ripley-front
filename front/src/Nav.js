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
    </div>
  );
}
