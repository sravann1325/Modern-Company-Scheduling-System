import React from 'react';
import { Message } from '../../utils/chatUtils';

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  return (
    <div className={`flex ${message.isSelf ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[70%] rounded-lg p-3 ${
          message.isSelf
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-900'
        }`}
      >
        <p>{message.content}</p>
        <p
          className={`text-xs mt-1 ${
            message.isSelf ? 'text-blue-100' : 'text-gray-500'
          }`}
        >
          {message.timestamp}
        </p>
      </div>
    </div>
  );
}