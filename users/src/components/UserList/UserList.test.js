import { within } from "@testing-library/react";
import { setup } from "../../testUtils";
import UserList from "./UserList";

describe("UserList component", () => {
  it("should render one user in a table if received number of users = 1", () => {
    const users = [{ id: 1, name: "Test", email: "email@mail.com" }];
    const { getByTestId } = setup(<UserList users={users} loading={false} />);

    const rowsWithUser = within(getByTestId("users")).getAllByRole("row");
    expect(rowsWithUser).toHaveLength(1);
  });
});
