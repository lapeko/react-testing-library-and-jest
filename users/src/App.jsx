import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { useUsers } from "./hooks/useUsers";
import "./App.css";

function App() {
  const { users, loading, addNewUser } = useUsers();
  return (
    <div className="container pt-3">
      <UserForm className="mb-5" loading={loading} addNewUser={addNewUser} />
      <UserList loading={loading} users={users} />
    </div>
  );
}

export default App;
