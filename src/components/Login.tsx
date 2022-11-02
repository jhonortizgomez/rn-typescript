import { useReducer, useEffect } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  name: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  username: "",
  name: "",
};

type AuthAction = {
  type: "logout";
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        name: "",
        username: "",
      };
  }
};

export const Login = () => {
  const [{ validando }, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  if (validando) {
    return (
      <>
        <div className="alert alert-info">Validando....</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      <div className="alert alert-danger">No autenticado</div>
      <div className="alert alert-success">Autenticado</div>
      <button className="btn btn-primary">Login</button>
      &nbsp;
      <button className="btn btn-danger">Logout</button>
    </>
  );
};
