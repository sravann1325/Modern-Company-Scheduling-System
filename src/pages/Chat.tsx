import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Message } from '../utils/chatUtils';
import MessageBubble from '../components/chat/MessageBubble';
import ChatHeader from '../components/chat/ChatHeader';
import ChatInput from '../components/chat/ChatInput';

const messages: Message[] = [
  {
    id: 1,
    sender: "Sarah Wilson",
    content: "Hi! How is the progress on the mobile app redesign?",
    timestamp: "10:30 AM",
    isSelf: false
  },
  {
    id: 2,
    sender: "You",
    content: "Going well! I have completed the main dashboard layout.",
    timestamp: "10:32 AM",
    isSelf: true
  }
];

export default function Chat() {
  const { userId } = useParams();
  const [newMessage, setNewMessage] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Add message handling logic here
      setNewMessage("");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm h-[calc(100vh-8rem)]">
      <ChatHeader name="Sarah Wilson" role="Product Manager" />

      <div className="h-[calc(100%-8rem)] overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>

      <ChatInput
        value={newMessage}
        onChange={setNewMessage}
        onSubmit={handleSend}
      />
    </div>
  );
}