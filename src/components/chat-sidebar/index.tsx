import UserCard from "./user-card";
import chatlist from "../../data/chatlist.json";
import useChatContext from "../../context/chat-context";

export default function ChatSidebar() {
  const { chatIndex, selectUser } = useChatContext();

  return (
    <div className="chat-sidebar">
      {chatlist.users.map((user) => (
        <div
          className={chatIndex === user.id ? "bg-gray-900" : ""}
          key={user.id}
          onClick={() => selectUser(user.id)}
        >
          <UserCard name={user.name} />
        </div>
      ))}
    </div>
  );
}
