import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const events = [
  {
    title: 'Team Meeting',
    start: '2024-03-20T10:00:00',
    end: '2024-03-20T11:00:00',
    backgroundColor: '#3B82F6'
  },
  {
    title: 'Project Deadline',
    start: '2024-03-22T00:00:00',
    backgroundColor: '#EF4444'
  },
  {
    title: 'Client Call',
    start: '2024-03-21T15:00:00',
    end: '2024-03-21T16:00:00',
    backgroundColor: '#8B5CF6'
  }
];

export default function Calendar() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay'
        }}
      />
    </div>
  );
}