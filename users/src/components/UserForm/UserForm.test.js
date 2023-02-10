import { setup } from "../../testUtils";
import UserForm from "./UserForm";

describe("UserForm component", () => {
  it("should show two inputs and a submit button", () => {
    const { getByRole, getAllByRole } = setup(<UserForm />);

    const inputs = getAllByRole("textbox");
    const submit = getByRole("button", { name: "Submit" });

    expect(inputs).toHaveLength(2);
    expect(submit).toBeInTheDocument();
  });
});
