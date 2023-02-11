const UserList = ({ users, loading }) => {
  if (loading) return <h2>Loading...</h2>;

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody data-testid="users">
        {users.map((user, index) => (
          <tr key={user.id}>
            <th scope="row">{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
