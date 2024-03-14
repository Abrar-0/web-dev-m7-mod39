import { useEffect, useState } from "react";
import User from "./User";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div style={{ border: "2px solid blue", margin: "15px",
    padding:'20px' ,borderRadius:'15px' }}>
      <h3>Users: {users.length}</h3>
      <hr />
      {users.map((user) => (
        <User user={user}></User>
      ))}
    </div>
  );
}
