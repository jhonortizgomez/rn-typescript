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

type LoginPayload = {
  username: string;
  name: string;
};
 
type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        name: "",
        username: "",
      };
    case "login":
      const { name, username } = action.payload;
      return {
        validando: false,
        token: "SoyPerfect",
        name,
        username,
      };
    default:
      return state;
  }
};

export const Login = () => {
  const [{ validando, token, name }, dispatch] = useReducer(
    authReducer,
    initialState
  );

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

  const login = () => {
    dispatch({
      type: "login",
      payload: {
        name: "Jhon",
        username: "jhonDev",
      },
    });
  };

  const logout = () => {
    dispatch({
      type: "logout",
    });
  };

  return (
    <>
      <h3>Login</h3>
      {token ? (
        <div className="alert alert-success">Autenticado como: {name}</div>
      ) : (
        <div className="alert alert-danger">No autenticado</div>
      )}
      {token ? (
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </>
  );
};
