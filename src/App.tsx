// import { Contador } from "./components/Contador";
// import { Funciones } from "./typeScript/Funciones";
// import { ObjetosLiterales } from "./typeScript/ObjetosLiterales";
// import { TiposBasicos } from "./typeScript/TiposBasicos";
// import { ContadorHook } from "./components/ContadorHook";
// import { Login } from "./components/Login";
// import { Usuarios } from "./components/Usuarios";

import { Formularios } from "./components/Formularios";

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a TS -React</h1>
      <hr />
      {
        /* <TiposBasicos />
      <ObjetosLiterales />
      <Funciones />
      <Contador />
      <ContadorHook /> */
        // <Login />
        // <Usuarios />
        <Formularios />
      }
    </div>
  );
};

export default App;
