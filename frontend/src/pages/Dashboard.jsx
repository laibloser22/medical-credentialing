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
        <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', backgroundColor: '#f0f4ff' }}>

            {/* Navbar */}
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', backgroundColor: '#1a73e8', color: 'white' }}>
                <h1 style={{ margin: 0 }}>Quad Solutions</h1>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <span>Welcome, {user?.name}! 👋</span>
                    <button onClick={handleLogout} style={{ padding: '8px 20px', backgroundColor: 'white', color: '#1a73e8', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                        Logout
                    </button>
                </div>
            </nav>

            {/* Dashboard Content */}
            <div style={{ padding: '40px' }}>
                <h2 style={{ color: '#1a73e8' }}>My Dashboard</h2>

                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '30px' }}>

                    {/* Submit Request Card */}
                    <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', width: '250px', textAlign: 'center' }}>
                        <h3 style={{ color: '#1a73e8' }}>📝 Submit Request</h3>
                        <p style={{ color: '#555' }}>Submit a new credentialing request</p>
                        <Link to="/submit-request">
                            <button style={{ padding: '10px 20px', backgroundColor: '#1a73e8', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                                Submit Now
                            </button>
                        </Link>
                    </div>

                    {/* Track Status Card */}
                    <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', width: '250px', textAlign: 'center' }}>
                        <h3 style={{ color: '#1a73e8' }}>📊 Track Status</h3>
                        <p style={{ color: '#555' }}>Check your application status</p>
                        <Link to="/track-status">
                            <button style={{ padding: '10px 20px', backgroundColor: '#1a73e8', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                                Track Now
                            </button>
                        </Link>
                    </div>

                    {/* Contact Support Card */}
                    <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', width: '250px', textAlign: 'center' }}>
                        <h3 style={{ color: '#1a73e8' }}>💬 Contact Support</h3>
                        <p style={{ color: '#555' }}>Get help from our team</p>
                        <Link to="/contact">
                            <button style={{ padding: '10px 20px', backgroundColor: '#1a73e8', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                                Contact Us
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;