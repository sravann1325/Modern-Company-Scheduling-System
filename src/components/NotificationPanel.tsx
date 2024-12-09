import React from 'react';
import { X, UserPlus, Calendar } from 'lucide-react';

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const notifications = [
  {
    id: 1,
    type: 'meeting',
    title: 'Meeting Request',
    message: 'Sarah Wilson requested a meeting for tomorrow at 2 PM',
    time: '5 min ago',
    icon: Calendar,
  },
  {
    id: 2,
    type: 'team',
    title: 'Team Invitation',
    message: 'Michael Chen invited you to join Mobile App Redesign project',
    time: '1 hour ago',
    icon: UserPlus,
  },
];

export default function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-16 right-0 w-96 bg-white rounded-lg shadow-lg border z-50">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="max-h-[400px] overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="p-4 border-b hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <notification.icon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">{notification.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}