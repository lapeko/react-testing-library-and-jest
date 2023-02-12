import { within } from "@testing-library/react";
import { setup } from "../../testUtils";
import UserList from "./UserList";

it("should render one user in a table if received number of users = 1", () => {
  const users = [{ id: 1, name: "Test", email: "email@mail.com" }];
  const { getByTestId } = setup(<UserList users={users} loading={false} />);

  const rowsWithUser = within(getByTestId("users")).getAllByRole("row");
  expect(rowsWithUser).toHaveLength(1);
});

it("should render name and email of every user received from props", () => {
  const users = [
    { id: 1, name: "Name 1", email: "email1@qwe.qw" },
    { id: 2, name: "Name 2", email: "email2@qwe.qw" },
  ];
  const { getByRole } = setup(<UserList users={users} loading={false} />);

  users.forEach(({ name, email }) => {
    expect(getByRole("cell", { name })).toBeInTheDocument();
    expect(getByRole("cell", { name: email })).toBeInTheDocument();
  });
});
