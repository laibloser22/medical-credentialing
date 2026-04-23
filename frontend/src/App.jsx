import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import SubmitRequest from './pages/SubmitRequest';
import TrackStatus from './pages/TrackStatus';
import Contact from './pages/Contact';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/submit-request" element={<SubmitRequest />} />
          <Route path="/track-status" element={<TrackStatus />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;