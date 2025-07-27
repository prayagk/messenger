import { createContext, useContext } from "react";

type ChatContextType = {
  chatIndex: number | null;
  selectUser: (id: number) => void;
};
export const ChatContext = createContext<null | ChatContextType>(null);

export default function useChatContext() {
  const context = useContext(ChatContext);
  if (!context) throw new Error("");
  return context;
}
