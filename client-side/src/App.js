import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import { isAuthenticated } from './auth'; 
import {  useDarkModeContext } from './context/DarkModeContext'; 
import { TaskProvider } from './context/TaskContext';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProtectedRoute = ({ element, guard, ...rest }) => {
  return guard() ? element : <Navigate to="/" replace />;
};

function App() {
  const { darkMode } = useDarkModeContext();

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}  >
      <Router>
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                element={
                  <TaskProvider>
                    <Dashboard />
                  </TaskProvider>
                }
                guard={isAuthenticated}
              />
            }
          />
        </Routes>
      </Router>
      <ToastContainer autoClose={1500} /> 
        </div>  
  );
}

export default App;
