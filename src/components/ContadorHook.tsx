import { useCounter } from "../hooks/useCounter";
export const ContadorHook = () => {
  const { valor, acumular } = useCounter();
  return (
    <>
      <h3>
        Contador Hook <small>{valor} </small>
      </h3>
      <button className="btn btn-primary" onClick={() => acumular(1)}>
        +1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => acumular(-1)}>
        -1
      </button>
    </>
  );
};
