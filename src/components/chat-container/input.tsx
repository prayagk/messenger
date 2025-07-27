import type { FormEvent } from "react";

interface InputProps {
  sendMessage: (message: string) => void;
}

export default function Input({ sendMessage }: InputProps) {
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    let message = formData.get("message") as string;
    message = message.trim();
    if (!message) return;
    sendMessage(message);
    form.reset();
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="input-container w-full flex p-2 h-fit"
    >
      <input
        placeholder="Message"
        name="message"
        className="border w-[90%] p-2"
        type="text"
      />
      <button type="submit" className="grow-1 border bg-green-900">
        Send
      </button>
    </form>
  );
}
