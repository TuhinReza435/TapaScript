import React, { useContext, useState } from "react";
import { UsersContex } from "../Contex/UserContex";
export default function NewUser() {
  const [username, setUsername] = useState("");
  const { users, setUsers } = useContext(UsersContex);

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleOnsubmit = (event) => {
    event.preventDefault();
    const newUser = { id: new Date().getTime().toString(), username: username };
    setUsers((previous) => [...previous, newUser]);
    setUsername("");
  };
  return (
    <div>
      <h2>User Regirstration</h2>
      <form onSubmit={handleOnsubmit}>
        <input
          type="text"
          name="username"
          placeholder="Input user name"
          className="my-3 border-3 py-2 px-2"
          value={username}
          onChange={handleUserNameChange}
        />
        <br />
        <button type="submit" className="bg-green-400 px-3 py-1 rounded-xl">
          Add User
        </button>
      </form>
    </div>
  );
}
