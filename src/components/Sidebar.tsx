import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Clock, Users, MessageSquare, Home } from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-gray-900 h-screen fixed left-0 top-0 text-white p-4">
      <div className="flex items-center gap-2 mb-8">
        <Clock className="w-8 h-8 text-blue-400" />
        <h1 className="text-xl font-bold">TaskFlow</h1>
      </div>
      
      <nav className="space-y-4">
        <Link
          to="/"
          className={`flex items-center gap-3 p-2 rounded ${
            isActive('/') ? 'bg-blue-600' : 'hover:bg-gray-800'
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/calendar"
          className={`flex items-center gap-3 p-2 rounded ${
            isActive('/calendar') ? 'bg-blue-600' : 'hover:bg-gray-800'
          }`}
        >
          <Calendar className="w-5 h-5" />
          <span>Calendar</span>
        </Link>
        <Link
          to="/team"
          className={`flex items-center gap-3 p-2 rounded ${
            isActive('/team') ? 'bg-blue-600' : 'hover:bg-gray-800'
          }`}
        >
          <Users className="w-5 h-5" />
          <span>Team</span>
        </Link>
        <Link
          to="/chat"
          className={`flex items-center gap-3 p-2 rounded ${
            isActive('/chat') ? 'bg-blue-600' : 'hover:bg-gray-800'
          }`}
        >
          <MessageSquare className="w-5 h-5" />
          <span>Chat</span>
        </Link>
      </nav>
    </div>
  );
}