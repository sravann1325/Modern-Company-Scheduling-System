export interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isSelf: boolean;
}

export const formatMessage = (content: string): string => {
  return content.trim();
};