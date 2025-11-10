test("navigates correctly between pages", () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Awareness/i));
  expect(screen.getByText(/Waste Management Awareness/i)).toBeInTheDocument();
});
