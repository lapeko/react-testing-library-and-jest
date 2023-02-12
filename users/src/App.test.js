import { waitForElementToBeRemoved, within } from "@testing-library/react";
import { setup } from "./testUtils";
import App from "./App";

it("should show a form with two empty fields, disabled submit button and Loading... instead of table with users when initialized", () => {
  const { getByRole, getAllByRole, queryByTestId } = setup(<App />);

  const [nameInput, emailInput] = getAllByRole("textbox");
  const submit = getByRole("button", { name: "Submit" });

  expect(nameInput).toBeEmptyDOMElement();
  expect(emailInput).toBeEmptyDOMElement();
  expect(submit).toBeDisabled();
  expect(getByRole("heading", { name: "Loading..." })).toBeInTheDocument();
  expect(queryByTestId("users")).not.toBeInTheDocument();
});

it('should show two users after "API" response', async () => {
  const { getByRole, getByTestId } = setup(<App />);

  const loading = getByRole("heading", { name: "Loading..." });
  await waitForElementToBeRemoved(loading, { timeout: 2500 });

  const userRows = within(getByTestId("users")).getAllByRole("row");
  expect(userRows).toHaveLength(2);
});

it("should add a new user when a user filled form and clicked submit", async () => {
  const { user, getByRole, getByLabelText, getByTestId } = setup(<App />);

  const loading = getByRole("heading", { name: "Loading..." });
  const submit = getByRole("button", { name: "Submit" });
  const nameLabel = getByLabelText("Name");
  const emailLabel = getByLabelText("Email");

  await user.click(nameLabel);
  await user.keyboard("Some name");
  await user.click(emailLabel);
  await user.keyboard("some@email.com");

  await waitForElementToBeRemoved(loading, { timeout: 2500 });
  let userRows = within(getByTestId("users")).getAllByRole("row");
  expect(userRows).toHaveLength(2);

  await user.click(submit);
  userRows = within(getByTestId("users")).getAllByRole("row");
  expect(userRows).toHaveLength(3);
});
