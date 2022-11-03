import { useState, useEffect, useRef } from "react";
import { ReqResList, User } from "../interfaces/reqRes";
import { reqResApi } from "../api/reqRes";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const paginaRef = useRef(1);
  console.log("paginaRef:", paginaRef);

  const loadUsers = async () => {
    const resp = await reqResApi.get<ReqResList>("/users/", {
      params: {
        page: paginaRef.current,
      },
    });

    if (resp.data.data.length > 0) {
      setUsers(resp.data.data);
    } else {
      paginaRef.current--;
      alert("No hay mas registros");
    }

    setUsers(resp.data.data);
  };

  const paginaSiguiente = () => {
    paginaRef.current++;
    loadUsers();
  };
  const paginaAnterior = () => {
    if (paginaRef.current > 1) {
      paginaRef.current--;
      loadUsers();
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return {
    users,
    paginaSiguiente,
    paginaAnterior,
  };
};
