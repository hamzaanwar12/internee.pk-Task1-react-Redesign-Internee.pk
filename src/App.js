import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Task1 from './pages/DashboardComponents/Tasks/Task1.js';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Task1" element={<Task1 />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;