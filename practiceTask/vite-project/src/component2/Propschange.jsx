import React, { useEffect, useState } from "react";

const Propschange = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [userId]);

  return (
    <div>
      <h2>User Details</h2>
      {user ? <p>{user.title}</p> : <p>Loading...</p>}
    </div>
  );
};

export default Propschange;
