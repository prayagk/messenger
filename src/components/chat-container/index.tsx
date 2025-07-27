import { useEffect, useState } from "react";
import ChatBody from "./chat-body";
import Header from "./header";
import Input from "./input";
import chatHistory from "../../data/chatHistory.json";
import useChatContext from "../../context/chat-context";
import type { IChatHistory, IMessage } from "../../types";

export default function ChatContainer() {
  const [currentChat, setCurrentChat] = useState<IChatHistory | null>(
    chatHistory[0]
  );

  const { chatIndex } = useChatContext();

  useEffect(() => {
    if (chatIndex) setCurrentChat(chatHistory[chatIndex - 1]);
  }, [chatIndex]);

  const sendMessage = (message: string) => {
    if (!currentChat) return;
    const newMessage: IMessage = {
      message: message,
      timestamp: Date.now(),
      isReceived: false,
    };
    setCurrentChat((prev) => {
      if (!prev) return prev;
      return { ...prev, history: [...prev.history, newMessage] };
    });
  };

  return (
    <div className="chat-conatiner">
      {currentChat && (
        <>
          <Header name={currentChat.user.name} />
          <ChatBody history={currentChat.history} />
          <Input sendMessage={sendMessage} />
        </>
      )}
    </div>
  );
}
