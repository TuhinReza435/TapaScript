import React, { useContext } from "react";
import { UsersContex } from "../Contex/UserContex";
export default function User({ user }) {
  const { users, setUsers } = useContext(UsersContex);
  const { id, username } = user;
  console.log(user);
  const handleDelete = (id) => {
    const filterUser = users.filter((user) => user.id != id);
    setUsers(filterUser);
  };
  return (
    <article className="user">
      <h2>{id}</h2>
      <p> {username} </p>
      <button
        onClick={() => {
          handleDelete(id);
        }}
        className="bg-red-400 py-2 rounded-full cursor-pointer border"
      >
        Delete
      </button>
    </article>
  );
}
