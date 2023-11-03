import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]); 
  const [filter, setFilter] = useState('all');

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (taskId, completed) => {
    const updatedTasks = tasks.map((task) =>
      task._id === taskId ? { ...task, completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task._id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, filter, addTask, updateTask, deleteTask, setFilter, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
