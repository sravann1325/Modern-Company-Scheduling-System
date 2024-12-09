import React from 'react';

interface ChatHeaderProps {
  name: string;
  role: string;
}

export default function ChatHeader({ name, role }: ChatHeaderProps) {
  return (
    <div className="border-b p-4">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
}