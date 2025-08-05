import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./input";

describe("Input component", () => {
  it("renders input and button", () => {
    render(<Input sendMessage={jest.fn()} />);
    expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
  });

  it("calls sendMessage with trimmed message on submit", () => {
    const sendMessage = jest.fn();
    render(<Input sendMessage={sendMessage} />);
    const input = screen.getByPlaceholderText(/message/i);
    fireEvent.change(input, { target: { value: "  hello world  " } });
    fireEvent.submit(input.closest("form")!);
    expect(sendMessage).toHaveBeenCalledWith("hello world");
  });

  it("does not call sendMessage for empty or whitespace message", () => {
    const sendMessage = jest.fn();
    render(<Input sendMessage={sendMessage} />);
    const input = screen.getByPlaceholderText(/message/i);
    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.submit(input.closest("form")!);
    expect(sendMessage).not.toHaveBeenCalled();
  });

  it("resets the form after sending a message", () => {
    const sendMessage = jest.fn();
    render(<Input sendMessage={sendMessage} />);
    const input = screen.getByPlaceholderText(/message/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.submit(input.closest("form")!);
    expect(input.value).toBe("");
  });
});
