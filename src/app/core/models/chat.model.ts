export interface SupportChat {
  id: string;
  clientId: string;
  messages: SupportMessage[];
  createdAt: number;
}

export interface SupportMessage {
  userId: string;
  text: string;
  createdAt: number;
}
