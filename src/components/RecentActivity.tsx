import React from 'react';
import { CheckCircle, Users } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'meeting',
    title: 'Team Sync Meeting',
    time: '2 hours ago',
    icon: Users,
  },
  {
    id: 2,
    type: 'completion',
    title: 'UI Design Task Completed',
    time: '4 hours ago',
    icon: CheckCircle,
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className="bg-gray-100 p-2 rounded-lg">
              <activity.icon className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="font-medium">{activity.title}</p>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}