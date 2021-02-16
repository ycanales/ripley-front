import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import TextInput from "./TextInput";
import api from "../api";

export default function Form({ product }) {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    const { nombre, descripcion, marca, precio } = data;
    console.log("data", data, "errors", errors);
    if (nombre) {
      if (product) {
        console.log("update");
      } else {
        axios.post(`${api}/products`, { nombre, descripcion, marca, precio });
      }
    }
  };
  return (
    <>
      <div>
        <div class="md:grid md:grid-cols-2">
          <div class="mt-5 md:mt-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
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
                    id="nombre"
                    placeholder="9900"
                    type="number"
                  />

                  <div>
                    <label class="block text-sm font-medium text-gray-700">
                      Imagen
                    </label>
                    <div class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div class="space-y-1 text-center">
                        <div class="flex text-sm text-gray-600">
                          <label
                            for="file-upload"
                            class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Subir imagen</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              class="sr-only"
                            />
                          </label>
                          <p class="pl-1">or arrástrela aquí</p>
                        </div>
                        <p class="text-xs text-gray-500">
                          PNG, JPG, GIF hasta 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class="border-t border-gray-200"></div>
        </div>
      </div>
    </>
  );
}
