test("valid submission stores request in localStorage", () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: "John Doe" } });
  fireEvent.change(screen.getByLabelText(/Location/i), { target: { value: "Nairobi" } });
  fireEvent.click(screen.getByLabelText(/General/i));
  fireEvent.click(screen.getByText(/Submit Request/i));
  const stored = JSON.parse(globalThis.localStorage.getItem("pickupRequests"));
  expect(stored.length).toBeGreaterThan(0);
});
