import React from 'react';
import { Briefcase } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Mobile App Redesign',
    progress: 75,
    team: ['Sarah W.', 'Michael C.', 'Emma R.']
  },
  {
    id: 2,
    name: 'Customer Portal',
    progress: 45,
    team: ['Emma R.', 'Sarah W.']
  },
  {
    id: 3,
    name: 'API Integration',
    progress: 90,
    team: ['Michael C.']
  }
];

export default function ProjectList() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Active Projects</h2>
        <Briefcase className="w-5 h-5 text-gray-500" />
      </div>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="border-b last:border-0 pb-4 last:pb-0">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">{project.name}</h3>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  {project.team.map((member, index) => (
                    <span key={member}>
                      {member}
                      {index < project.team.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 rounded-full h-2"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}