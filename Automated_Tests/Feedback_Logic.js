test("rejects invalid request ID on feedback form", () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Feedback/i));
  fireEvent.change(screen.getByLabelText(/Request ID/i), { target: { value: "XYZ999" } });
  fireEvent.click(screen.getByText(/Submit Feedback/i));
  expect(screen.getByText(/Request ID not found/i)).toBeInTheDocument();
});
