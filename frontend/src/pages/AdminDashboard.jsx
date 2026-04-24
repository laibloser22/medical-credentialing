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
        <div style={{ fontFamily: 'Segoe UI, sans-serif', minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white' }}>

            {/* Navbar */}
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 60px', backgroundColor: '#111111', borderBottom: '1px solid #e74c3c' }}>
                <div>
                    <h1 style={{ color: '#e74c3c', fontSize: '1.5rem', fontWeight: '900', letterSpacing: '1px', margin: 0 }}>QUAD<span style={{ color: 'white' }}>SOLUTIONS</span></h1>
                    <p style={{ color: '#666', fontSize: '0.75rem', letterSpacing: '2px', margin: '3px 0 0 0' }}>ADMIN PANEL</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <span style={{ color: '#666', fontSize: '0.9rem' }}>Welcome, <span style={{ color: 'white', fontWeight: '700' }}>{user?.name}</span></span>
                    <button onClick={handleLogout} style={{ padding: '8px 20px', backgroundColor: 'transparent', color: '#e74c3c', border: '1px solid #e74c3c', borderRadius: '4px', cursor: 'pointer', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '1px' }}>
                        LOGOUT
                    </button>
                </div>
            </nav>

            {/* Content */}
            <div style={{ padding: '60px' }}>
                <p style={{ color: '#e74c3c', letterSpacing: '3px', fontSize: '0.85rem', fontWeight: '700', marginBottom: '10px' }}>ADMIN PORTAL</p>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '50px' }}>ADMIN DASHBOARD</h2>

                <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}>

                    {/* Requests Card */}
                    <div style={{ backgroundColor: '#111111', padding: '40px', borderRadius: '4px', flex: '1', minWidth: '220px', borderTop: '3px solid #e74c3c' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>📋</div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>All Requests</h3>
                        <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '25px' }}>View and manage all credentialing requests</p>
                        <Link to="/admin/requests">
                            <button style={{ padding: '12px 25px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '1px' }}>
                                VIEW REQUESTS →
                            </button>
                        </Link>
                    </div>

                    {/* Messages Card */}
                    <div style={{ backgroundColor: '#111111', padding: '40px', borderRadius: '4px', flex: '1', minWidth: '220px', borderTop: '3px solid #e74c3c' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>💬</div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>Messages</h3>
                        <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '25px' }}>View all contact messages from clients</p>
                        <Link to="/admin/messages">
                            <button style={{ padding: '12px 25px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '1px' }}>
                                VIEW MESSAGES →
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;