import React, { useContext } from "react";
import User from "./user";
import { UsersContex } from "../Contex/UserContex";

export default function Users() {
  const { users, setUsers } = useContext(UsersContex);

  return (
    <section className="user">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </section>
  );
}
