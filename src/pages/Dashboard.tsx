import React from 'react';
import TaskList from '../components/TaskList';
import RecentActivity from '../components/RecentActivity';
import ProjectList from '../components/ProjectList';

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-8">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white">
            <h3 className="text-lg font-semibold mb-2">Total Tasks</h3>
            <p className="text-3xl font-bold">24</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg text-white">
            <h3 className="text-lg font-semibold mb-2">Completed</h3>
            <p className="text-3xl font-bold">16</p>
          </div>
        </div>
        <TaskList />
      </div>
      <div className="col-span-4 space-y-6">
        <RecentActivity />
        <ProjectList />
      </div>
    </div>
  );
}