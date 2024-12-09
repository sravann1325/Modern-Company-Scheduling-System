import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Wilson',
    role: 'Product Manager',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    projects: ['Mobile App Redesign', 'Customer Portal']
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Senior Developer',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    projects: ['API Integration', 'Mobile App Redesign']
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'UI/UX Designer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    projects: ['Customer Portal', 'Design System']
  }
];

export default function Team() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-4">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Projects</h4>
              <div className="space-y-2">
                {member.projects.map((project) => (
                  <div
                    key={project}
                    className="bg-gray-50 px-3 py-2 rounded-md text-sm"
                  >
                    {project}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <Link
                to={`/chat/${member.id}`}
                className="flex items-center justify-center flex-1 gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                <MessageSquare className="w-4 h-4" />
                Message
              </Link>
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <Phone className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}