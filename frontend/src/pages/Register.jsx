import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'user' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await axios.post('https://medical-credentialing-backend.onrender.com/api/auth/register', formData);
            login(res.data.user, res.data.token);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
        setLoading(false);
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', backgroundColor: '#0a0a0a', flexDirection: window.innerWidth < 768 ? 'column' : 'row' }}>

            {/* Left Side */}
            <div style={{ flex: 1, backgroundColor: '#111111', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px', borderRight: '1px solid #222' }}>
                <h1 style={{ color: '#e74c3c', fontSize: '2rem', fontWeight: '900', letterSpacing: '1px', marginBottom: '10px' }}>QUAD<span style={{ color: 'white' }}>SOLUTIONS</span></h1>
                <p style={{ color: '#666', fontSize: '0.9rem', letterSpacing: '2px', marginBottom: '50px' }}>MEDICAL CREDENTIALING</p>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '900', lineHeight: '1.2', marginBottom: '20px' }}>START YOUR <br />JOURNEY</h2>
                <p style={{ color: '#666', lineHeight: '1.8' }}>Create your account and submit your credentialing request in minutes.</p>
                <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {['Fast Processing', 'Secure Platform', 'Real-time Tracking'].map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: '#e74c3c', fontWeight: '900' }}>✓</span>
                            <span style={{ color: '#999', fontSize: '0.9rem' }}>{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Side - Form */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px' }}>
                <div style={{ width: '100%', maxWidth: '400px' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '8px' }}>Create Account</h3>
                    <p style={{ color: '#666', marginBottom: '35px', fontSize: '0.9rem' }}>Fill in your details to get started</p>

                    {error && <p style={{ color: '#e74c3c', marginBottom: '20px', fontSize: '0.9rem', padding: '12px', backgroundColor: '#1a0a0a', borderLeft: '3px solid #e74c3c' }}>{error}</p>}

                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', color: '#999', fontSize: '0.85rem', letterSpacing: '1px' }}>FULL NAME</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                                style={{ width: '100%', padding: '14px', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#111', color: 'white', fontSize: '0.95rem', boxSizing: 'border-box' }}
                            />
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', color: '#999', fontSize: '0.85rem', letterSpacing: '1px' }}>EMAIL ADDRESS</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="you@example.com"
                                style={{ width: '100%', padding: '14px', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#111', color: 'white', fontSize: '0.95rem', boxSizing: 'border-box' }}
                            />
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', color: '#999', fontSize: '0.85rem', letterSpacing: '1px' }}>PASSWORD</label>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    placeholder="••••••••"
                                    style={{ width: '100%', padding: '14px', paddingRight: '45px', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#111', color: 'white', fontSize: '0.95rem', boxSizing: 'border-box' }}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}
                                >
                                    {showPassword ? '🙈' : '👁️'}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            style={{ width: '100%', padding: '14px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', fontSize: '1rem', fontWeight: '700', cursor: 'pointer', letterSpacing: '1px' }}
                        >
                            {loading ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT →'}
                        </button>
                    </form>

                    <p style={{ textAlign: 'center', marginTop: '25px', color: '#666', fontSize: '0.9rem' }}>
                        Already have an account? <Link to="/login" style={{ color: '#e74c3c', fontWeight: '700' }}>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;