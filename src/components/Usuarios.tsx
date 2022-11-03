import { useUsers } from "../hooks/useUsers";
import { User } from "../interfaces/reqRes";

export const Usuarios = () => {
  const { users, paginaSiguiente, paginaAnterior } = useUsers();

  const renderItem = ({ first_name, last_name, avatar, email, id }: User) => {
    return (
      <tr key={id.toString()}>
        <th>
          <img
            src={avatar}
            alt={first_name}
            style={{
              width: 35,
              borderRadius: 100,
            }}
          />
        </th>
        <th>
          {first_name} {last_name}{" "}
        </th>
        <th>{email} </th>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table ">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>{users.map(renderItem)}</tbody>
      </table>
      <button className="btn btn-primary" onClick={paginaAnterior}>
        back
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={paginaSiguiente}>
        Next
      </button>
    </>
  );
};
