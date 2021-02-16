import React from "react";

export default function TextInput({
  label,
  id,
  placeholder,
  type = "text",
  register,
  errors,
  registerParams,
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
          name={id}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
          type={type}
          placeholder={placeholder}
          ref={register(registerParams)}
        ></input>
      </div>
      {errors[id] && (
        <p className="mt-2 text-sm text-gray-500">Este campo es requerido</p>
      )}
    </div>
  );
}
