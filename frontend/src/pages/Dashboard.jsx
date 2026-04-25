import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div style={{ fontFamily: 'Segoe UI, sans-serif', minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white' }}>

            {/* Navbar */}
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 30px', backgroundColor: '#111111', borderBottom: '1px solid #222', flexWrap: 'wrap', gap: '15px' }}>
                <h1 style={{ color: '#e74c3c', fontSize: '1.5rem', fontWeight: '900', letterSpacing: '1px' }}>QUAD<span style={{ color: 'white' }}>SOLUTIONS</span></h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <span style={{ color: '#666', fontSize: '0.9rem' }}>Welcome, <span style={{ color: 'white', fontWeight: '700' }}>{user?.name}</span></span>
                    <button onClick={handleLogout} style={{ padding: '8px 20px', backgroundColor: 'transparent', color: '#e74c3c', border: '1px solid #e74c3c', borderRadius: '4px', cursor: 'pointer', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '1px' }}>
                        LOGOUT
                    </button>
                </div>
            </nav>

            {/* Content */}
            <div style={{ padding: 'clamp(20px, 5vw, 60px)' }}>
                <p style={{ color: '#e74c3c', letterSpacing: '3px', fontSize: '0.85rem', fontWeight: '700', marginBottom: '10px' }}>USER PORTAL</p>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '50px' }}>MY DASHBOARD</h2>

                <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}>

                    {/* Submit Request */}
                    <div style={{ backgroundColor: '#111111', padding: '40px', borderRadius: '4px', width: '280px', borderTop: '3px solid #e74c3c', flex: '1', minWidth: '220px' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>📝</div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>Submit Request</h3>
                        <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '25px' }}>Submit a new credentialing request with your documents</p>
                        <Link to="/submit-request">
                            <button style={{ padding: '12px 25px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '1px' }}>
                                SUBMIT NOW →
                            </button>
                        </Link>
                    </div>

                    {/* Track Status */}
                    <div style={{ backgroundColor: '#111111', padding: '40px', borderRadius: '4px', width: '280px', borderTop: '3px solid #e74c3c', flex: '1', minWidth: '220px' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>📊</div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>Track Status</h3>
                        <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '25px' }}>Check the status of your submitted applications</p>
                        <Link to="/track-status">
                            <button style={{ padding: '12px 25px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '1px' }}>
                                TRACK NOW →
                            </button>
                        </Link>
                    </div>

                    {/* Contact Support */}
                    <div style={{ backgroundColor: '#111111', padding: '40px', borderRadius: '4px', width: '280px', borderTop: '3px solid #e74c3c', flex: '1', minWidth: '220px' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>💬</div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>Contact Support</h3>
                        <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '25px' }}>Get help from our expert credentialing team</p>
                        <Link to="/contact">
                            <button style={{ padding: '12px 25px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '1px' }}>
                                CONTACT US →
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;