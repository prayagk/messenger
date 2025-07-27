export interface IMessage {
  timestamp: number;
  message: string;
  isReceived: boolean;
}

export interface IUser {
  name: string;
  isOnline: boolean;
  isTyping: boolean;
}

export interface IChatHistory {
  user: IUser;
  history: IMessage[];
}
