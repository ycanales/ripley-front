import React from "react";

export default function TextInput({
  label,
  id,
  placeholder,
  help,
  type = "text",
}) {
  return (
    <div>
      <label
        htmlFor="about"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={id}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
          type={type}
          placeholder={placeholder}
        ></input>
      </div>
      <p className="mt-2 text-sm text-gray-500">{help}</p>
    </div>
  );
}
