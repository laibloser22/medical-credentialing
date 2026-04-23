import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', backgroundColor: '#f0f4ff' }}>

            {/* Navbar */}
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', backgroundColor: '#c0392b', color: 'white' }}>
                <h1 style={{ margin: 0 }}>Quad Solutions — Admin</h1>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <span>Welcome, {user?.name}! 👋</span>
                    <button onClick={handleLogout} style={{ padding: '8px 20px', backgroundColor: 'white', color: '#c0392b', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                        Logout
                    </button>
                </div>
            </nav>

            {/* Dashboard Content */}
            <div style={{ padding: '40px' }}>
                <h2 style={{ color: '#c0392b' }}>Admin Dashboard</h2>

                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '30px' }}>

                    {/* Manage Requests Card */}
                    <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', width: '250px', textAlign: 'center' }}>
                        <h3 style={{ color: '#c0392b' }}>📋 All Requests</h3>
                        <p style={{ color: '#555' }}>View and manage all credentialing requests</p>
                        <Link to="/admin/requests">
                            <button style={{ padding: '10px 20px', backgroundColor: '#c0392b', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                                View Requests
                            </button>
                        </Link>
                    </div>

                    {/* Messages Card */}
                    <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', width: '250px', textAlign: 'center' }}>
                        <h3 style={{ color: '#c0392b' }}>💬 Messages</h3>
                        <p style={{ color: '#555' }}>View all contact messages from clients</p>
                        <Link to="/admin/messages">
                            <button style={{ padding: '10px 20px', backgroundColor: '#c0392b', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                                View Messages
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;