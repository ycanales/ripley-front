import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import TextInput from "./TextInput";
import api from "../api";

export default function Form() {
  const { id } = useParams();
  const { register, handleSubmit, errors, reset } = useForm();

  useEffect(() => {
    if (id) {
      axios.get(`${api}/products/${id}`).then((result) => {
        console.log("(use effect) result", result);
        reset(result.data);
      });
    }
  }, [id]);

  const onSubmit = (data) => {
    const { nombre, descripcion, marca, precio } = data;
    console.log("data", data, "errors", errors);
    if (nombre) {
      const formData = new FormData();
      const image = document.querySelector("#imagen");
      if (image) {
        formData.append("imagen", image.files[0]);
      }
      formData.append("nombre", nombre);
      formData.append("descripcion", descripcion);

      if (id) {
        console.log("update");
        axios.patch(`${api}/products/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        axios.post(`${api}/products`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
    }
  };
  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-2">
          <div className="mt-5 md:mt-0">
            <form
              action={`${api}/products`}
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
            >
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <TextInput
                    register={register}
                    registerParams={{ required: true, min: 4 }}
                    errors={errors}
                    label="Nombre"
                    id="nombre"
                    placeholder="Zapatillas Running"
                    required
                  />
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Descripción"
                    id="descripcion"
                    placeholder="Modernas y livianas."
                  />
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Marca"
                    id="marca"
                    placeholder="Zico"
                  />
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Precio"
                    id="precio"
                    placeholder="9900"
                    type="number"
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Imagen
                    </label>
                    <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <input id="imagen" name="imagen" type="file" />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF hasta 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>
    </>
  );
}
