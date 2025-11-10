// __tests__/PickupForm.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("shows validation errors when required fields are empty", () => {
  render(<App />);
  const submitBtn = screen.getByText(/Submit Request/i);
  fireEvent.click(submitBtn);
  expect(screen.getByText(/Full Name/i)).toBeInTheDocument();
  expect(screen.getByText(/Location/i)).toBeInTheDocument();
});
