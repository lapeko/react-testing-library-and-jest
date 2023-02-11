import { useEffect, useState } from "react";
import { users as usersResponse } from "../data/users";

export const useUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState();

  useEffect(() => {
    new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
      setUsers(usersResponse);
      setLoading(false);
    });
  }, []);

  const addNewUser = (newUser) => setUsers((users) => [...users, newUser]);

  return { users, loading, addNewUser };
};
