import { useState } from "react";
import ChatContainer from "./chat-container";
import ChatSidebar from "./chat-sidebar";
import { ChatContext } from "../context/chat-context";

export default function MessengerContainer() {
  const [chatIndex, setChatIndex] = useState<number>(1);

  const selectUser = (id: number) => setChatIndex(id);

  return (
    <ChatContext.Provider value={{ chatIndex, selectUser }}>
      <div className="messenger-container text-white">
        <ChatSidebar />
        <ChatContainer />
      </div>
    </ChatContext.Provider>
  );
}
