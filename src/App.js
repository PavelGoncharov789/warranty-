import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AdminPanel from './components/AdminPanel';
import GuestPage from './components/GuestPage';
import Services from './components/Services'; // Новый компонент
import Pricing from './components/Pricing'; // Новый компонент
import Requests from './components/Requests'; // Новый компонент
import About from './components/About'; // Новый компонент


const App = () => {
  // const role = localStorage.getItem('role'); // Получаем роль из localStorage
  let role='user'

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/user"
          element={role === 'user' ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin"
          element={role === 'admin' ? <AdminPanel /> : <Navigate to="/login" />}
        />
        <Route
          path="/guest"
          element={role === 'guest' ? <GuestPage /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
