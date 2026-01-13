import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Webpages from './pages/Webpages';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Booking from './pages/Booking';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
            <Layout />
        }>
          <Route index element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="webpages" element={
            <ProtectedRoute>
              <Webpages />
            </ProtectedRoute>
          } />
          <Route path="home" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="about" element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          } />
          <Route path="booking" element={
            <ProtectedRoute>
              <Booking />
            </ProtectedRoute>
          } />
          <Route path="contact" element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          } />
          <Route path="settings" element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
