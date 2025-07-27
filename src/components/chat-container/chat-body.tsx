import type { IChatHistory } from "../../types";
import ChatBubble from "./chat-bubble";

export default function ChatBody({ history }: Pick<IChatHistory, "history">) {
  return (
    <div className="flex flex-col w-full gap-2 p-2 overflow-y-auto">
      {history.map((chat) => (
        <ChatBubble key={chat.timestamp} chat={chat} />
      ))}
    </div>
  );
}
