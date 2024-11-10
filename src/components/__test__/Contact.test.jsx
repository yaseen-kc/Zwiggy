import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// Mock for form submission handler
const mockSubmit = jest.fn();

describe("Contact Component", () => {
  // Rendering Tests
  test("should render the 'Contact Us' heading", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading", { name: /contact us/i });
    expect(heading).toBeInTheDocument();
  });

  test("should render the name input field", () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText("Name");
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveAttribute("type", "text");
  });

  test("should render the message input field", () => {
    render(<Contact />);
    const messageInput = screen.getByPlaceholderText("Message");
    expect(messageInput).toBeInTheDocument();
    expect(messageInput).toHaveAttribute("type", "text");
  });

  test("should render the submit button", () => {
    render(<Contact />);
    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button"); // default type
  });

  test("should render the form container div", () => {
    render(<Contact />);
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });

  test("should render the correct button text ('Submit')", () => {
    render(<Contact />);
    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toHaveTextContent("Submit");
  });

  // Form Functionality Tests
  test("should accept user input in the 'Name' field", () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText("Name");
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    expect(nameInput).toHaveValue("John Doe");
  });

  test("should accept user input in the 'Message' field", () => {
    render(<Contact />);
    const messageInput = screen.getByPlaceholderText("Message");
    fireEvent.change(messageInput, {
      target: { value: "Hello, this is a test message!" },
    });
    expect(messageInput).toHaveValue("Hello, this is a test message!");
  });

  test("should call the form submission handler when the button is clicked", async () => {
    render(<Contact />);
    const button = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(button);
    await waitFor(() => expect(mockSubmit).toHaveBeenCalledTimes(1));
  });

  test("should clear input fields after form submission", async () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText("Name");
    const messageInput = screen.getByPlaceholderText("Message");
    const button = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(messageInput, { target: { value: "Test Message" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(nameInput).toHaveValue("");
      expect(messageInput).toHaveValue("");
    });
  });

  // Accessibility Tests
  test("should have accessible form inputs", () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText("Name");
    const messageInput = screen.getByPlaceholderText("Message");
    expect(nameInput).toHaveAccessibleName("Name");
    expect(messageInput).toHaveAccessibleName("Message");
  });

  test("should have an accessible submit button", () => {
    render(<Contact />);
    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toHaveAccessibleName("Submit");
  });

  // Validation and Error Handling
  test("should show an error if the 'Name' field is left empty and form is submitted", async () => {
    render(<Contact />);
    const button = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(button);
    // Assuming there's an error message displayed for empty 'Name'
    const errorMessage = screen.getByText(/name is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("should show an error if the 'Message' field is left empty and form is submitted", async () => {
    render(<Contact />);
    const button = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(button);
    // Assuming there's an error message displayed for empty 'Message'
    const errorMessage = screen.getByText(/message is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("should not allow form submission if either field is empty", async () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText("Name");
    const messageInput = screen.getByPlaceholderText("Message");
    const button = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(nameInput, { target: { value: "" } });
    fireEvent.change(messageInput, { target: { value: "Test Message" } });
    fireEvent.click(button);
    const errorMessage = screen.getByText(/name is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("should show a success message after form submission", async () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText("Name");
    const messageInput = screen.getByPlaceholderText("Message");
    const button = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(nameInput, { target: { value: "John" } });
    fireEvent.change(messageInput, { target: { value: "Test Message" } });
    fireEvent.click(button);

    await waitFor(() => {
      const successMessage = screen.getByText(/your message has been sent/i);
      expect(successMessage).toBeInTheDocument();
    });
  });

  test("should validate message length", async () => {
    render(<Contact />);
    const messageInput = screen.getByPlaceholderText("Message");
    fireEvent.change(messageInput, { target: { value: "Short" } });
    const button = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(button);
    const errorMessage = screen.getByText(
      /message must be at least 10 characters/i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  // Button Behavior Tests
  test("should disable the submit button if the form is invalid", () => {
    render(<Contact />);
    const button = screen.getByRole("button", { name: /submit/i });
    const nameInput = screen.getByPlaceholderText("Name");
    fireEvent.change(nameInput, { target: { value: "" } });
    expect(button).toBeDisabled();
  });

  test("should enable the submit button when the form is valid", () => {
    render(<Contact />);
    const button = screen.getByRole("button", { name: /submit/i });
    const nameInput = screen.getByPlaceholderText("Name");
    const messageInput = screen.getByPlaceholderText("Message");
    fireEvent.change(nameInput, { target: { value: "John" } });
    fireEvent.change(messageInput, {
      target: { value: "Test message content" },
    });
    expect(button).toBeEnabled();
  });

  test("should not submit the form if the button is disabled", () => {
    render(<Contact />);
    const button = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(button);
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  // Visual Tests
  test("should match the snapshot", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("should apply correct styling (CSS classes)", () => {
    render(<Contact />);
    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toHaveClass(
      "border",
      "border-black",
      "p-2",
      "m-2",
      "bg-gray-100",
      "rounded-md"
    );
  });

  // Edge Case Tests
  test("should handle special characters in 'Name' field", () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText("Name");
    fireEvent.change(nameInput, { target: { value: "J@hn D03!" } });
    expect(nameInput).toHaveValue("J@hn D03!");
  });

  test("should handle special characters in 'Message' field", () => {
    render(<Contact />);
    const messageInput = screen.getByPlaceholderText("Message");
    fireEvent.change(messageInput, { target: { value: "Hello! @#&$%" } });
    expect(messageInput).toHaveValue("Hello! @#&$%");
  });

  test("should handle long inputs in 'Name' field", () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText("Name");
    fireEvent.change(nameInput, {
      target: { value: "A very long name that exceeds typical input length" },
    });
    expect(nameInput).toHaveValue(
      "A very long name that exceeds typical input length"
    );
  });

  test("should handle long inputs in 'Message' field", () => {
    render(<Contact />);
    const messageInput = screen.getByPlaceholderText("Message");
    fireEvent.change(messageInput, {
      target: { value: "A long message that exceeds typical input length" },
    });
    expect(messageInput).toHaveValue(
      "A long message that exceeds typical input length"
    );
  });

  test("should maintain form state across re-renders", () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText("Name");
    fireEvent.change(nameInput, { target: { value: "John" } });
    expect(nameInput).toHaveValue("John");
    // Simulate a re-render and check if state persists
    render(<Contact />);
    expect(nameInput).toHaveValue("John");
  });

  // Error Handling Test
  test("should handle unexpected errors during form submission", async () => {
    render(<Contact />);
    const button = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(button);
    // Simulate an error in submission
    const errorMessage = screen.getByText(
      /there was an error submitting your form/i
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
