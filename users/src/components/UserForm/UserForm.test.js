import { setup } from "../../testUtils";
import UserForm from "./UserForm";

describe("UserForm component", () => {
  it("should show two inputs and a submit button", () => {
    const { getByRole, getAllByRole } = setup(<UserForm />);

    const inputs = getAllByRole("textbox");
    const submit = getByRole("button", { name: "Submit" });

    expect(inputs).toHaveLength(2);
    expect(submit).toBeDisabled();
  });

  it("should call addNewUser from props if user filled name + email and pressed submit", async () => {
    const addNewUser = jest.fn();
    const { user, getByRole, getAllByRole } = setup(
      <UserForm addNewUser={addNewUser} loading={false} />
    );

    const [nameInput, emailInput] = getAllByRole("textbox");
    const submit = getByRole("button", { name: "Submit" });

    await user.click(nameInput);
    await user.keyboard("First name");
    await user.click(emailInput);
    await user.keyboard("test@mail.com");
    await user.click(submit);

    expect(addNewUser).toHaveBeenCalledWith({
      id: expect.any(Number),
      name: "First name",
      email: "test@mail.com",
    });
  });
});
