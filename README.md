<!-- omit in toc -->
# TaskFlow - Modern Company Scheduling System

A modern, responsive web application for team collaboration, task management, and scheduling.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)

## Features

- 📊 **Dashboard**: Overview of tasks, projects, and recent activities
- 📅 **Calendar Integration**: Schedule and manage meetings and deadlines
- 👥 **Team Management**: View team members and their projects
- 💬 **Real-time Chat**: Communicate with team members
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎨 **Modern UI**: Clean and intuitive interface with Tailwind CSS

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd taskflow
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── chat/         # Chat-related components
│   └── ...
├── pages/            # Page components
├── utils/            # Utility functions
├── App.tsx           # Root component
└── main.tsx         # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- **React** - UI Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **FullCalendar** - Calendar Component
- **Lucide React** - Icons
- **date-fns** - Date Formatting