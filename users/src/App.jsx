import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { users as usersResponse } from "./data/users";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState();

  useEffect(() => {
    new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
      setUsers(usersResponse);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container pt-3">
      <UserForm className="mb-5" loading={loading} setUsers={setUsers} />
      <UserList loading={loading} users={users} />
    </div>
  );
}

export default App;
