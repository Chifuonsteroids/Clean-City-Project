test("filters dashboard requests by status", () => {
  localStorage.setItem("pickupRequests", JSON.stringify([
    { id: "REQ001", name: "User1", location: "Nairobi", status: "Pending" },
    { id: "REQ002", name: "User2", location: "Kisumu", status: "Completed" }
  ]));
  render(<App />);
  fireEvent.click(screen.getByText(/Dashboard/i));
  fireEvent.change(screen.getByLabelText(/Filter by Status/i), { target: { value: "Pending" } });
  expect(screen.getByText(/Pending/)).toBeInTheDocument();
  expect(screen.queryByText(/Completed/)).not.toBeInTheDocument();
});
