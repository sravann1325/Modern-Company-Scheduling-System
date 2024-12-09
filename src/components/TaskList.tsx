import React, { useState } from 'react';
import { CheckCircle, Clock } from 'lucide-react';
import AddTaskModal from './AddTaskModal';
import { formatDateTime } from '../utils/dateUtils';

const initialTasks = [
  {
    id: 1,
    title: 'Design Review Meeting',
    deadline: '2024-03-20 14:00',
    progress: 75,
  },
  {
    id: 2,
    title: 'Frontend Implementation',
    deadline: '2024-03-22 17:00',
    progress: 45,
  },
  {
    id: 3,
    title: 'Client Presentation',
    deadline: '2024-03-23 11:00',
    progress: 20,
  },
  {
    id: 4,
    title: 'Team Sprint Planning',
    deadline: '2024-03-24 10:00',
    progress: 0,
  },
  {
    id: 5,
    title: 'Code Review',
    deadline: '2024-03-25 15:00',
    progress: 90,
  },
];

export default function TaskList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddTask = (newTask: { title: string; deadline: string; description: string }) => {
    const task = {
      id: tasks.length + 1,
      title: newTask.title,
      deadline: newTask.deadline,
      progress: 0,
    };
    setTasks([...tasks, task]);
  };

  const handleCompleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Upcoming Deadlines</h2>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add New Task
        </button>
      </div>
      
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">{task.title}</h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <Clock className="w-4 h-4 mr-1" />
                  {formatDateTime(task.deadline)}
                </div>
              </div>
              <button 
                onClick={() => handleCompleteTask(task.id)}
                className="text-green-500 hover:text-green-600"
              >
                <CheckCircle className="w-6 h-6" />
              </button>
            </div>
            
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>{task.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 rounded-full h-2"
                  style={{ width: `${task.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <AddTaskModal 
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddTask}
      />
    </div>
  );
}