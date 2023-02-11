import { useMemo, useState } from "react";

const UserForm = ({ className, loading, addNewUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitEnabled = useMemo(
    () => !loading && name && email,
    [loading, name, email]
  );

  const onNameChange = (e) => setName(e.target.value);

  const onEmailChange = (e) => setEmail(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    addNewUser({ id: Date.now(), name, email });
    setName("");
    setEmail("");
  };

  return (
    <form className={className} onSubmit={submitHandler}>
      <h2>Add a user:</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={onNameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={onEmailChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={!submitEnabled}
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
