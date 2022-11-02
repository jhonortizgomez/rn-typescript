import React from "react";

export const TiposBasicos = () => {
  const nombre: string = "Fernando";
  const edad: number = 35;
  const estaActivo: boolean = true;

  const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua']

  return (
    <>
      <h3>Tipos Basicos</h3>
      {nombre}, {edad}
      <br />
      {estaActivo ? poderes.join(', ') : "no esta activo"}
    </>
  );
};
