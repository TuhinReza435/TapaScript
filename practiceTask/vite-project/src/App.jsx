import { useState } from "react";
import "./App.css";
import Users from "./component3/Users";
import NewUser from "./component3/NewUser";
import { UsersContex } from "./Contex/UserContex";

function App() {
  const [users, setUsers] = useState([
    { id: 1, username: "anisul" },
    { id: 2, username: "Alex" },
  ]);
  return (
    <UsersContex.Provider value={{ users, setUsers }}>
      <div>
        <NewUser  />
        <Users />
      </div>
    </UsersContex.Provider>
  );
}

export default App;
