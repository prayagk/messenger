import type { IMessage } from "../../types";

export default function ChatBubble({ chat }: { chat: IMessage }) {
  const style = {
    maxWidth: "70%",
    alignSelf: chat.isReceived ? "start" : "end",
    backgroundColor: chat.isReceived ? "#FFFFFF" : "#DCF8C6",
  };
  return (
    <div style={style} className="bg-red-50 px-5 py-2 rounded-xl text-black">
      {chat.message}
    </div>
  );
}
