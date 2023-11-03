import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { TaskProvider } from './context/TaskContext';
import { DarkModeProvider } from './context/DarkModeContext';
import reportWebVitals from './reportWebVitals';

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

ReactDOM.render(
  <React.StrictMode>
      <TaskProvider>
    <div className={prefersDarkMode ? 'dark-mode' : 'light-mode'}>
        <DarkModeProvider initialDarkMode={prefersDarkMode}>
          <App />
        </DarkModeProvider>
    </div>
      </TaskProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
