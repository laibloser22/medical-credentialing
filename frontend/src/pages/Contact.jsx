import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');
        try {
            await axios.post('https://medical-credentialing-backend.onrender.com/api/contact', formData);
            setSuccess('Message sent successfully! We will get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
        setLoading(false);
    };

    const inputStyle = { width: '100%', padding: '14px', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#111', color: 'white', fontSize: '0.95rem', boxSizing: 'border-box' };
    const labelStyle = { display: 'block', marginBottom: '8px', color: '#999', fontSize: '0.85rem', letterSpacing: '1px' };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white', padding: 'clamp(20px, 5vw, 60px)' }}>
            <div style={{ maxWidth: '650px', margin: '0 auto' }}>
                <button onClick={() => navigate('/dashboard')} style={{ background: 'none', border: 'none', color: '#e74c3c', cursor: 'pointer', marginBottom: '30px', fontSize: '0.9rem', letterSpacing: '1px', fontWeight: '700' }}>
                    ← BACK TO DASHBOARD
                </button>
                <p style={{ color: '#e74c3c', letterSpacing: '3px', fontSize: '0.85rem', fontWeight: '700', marginBottom: '10px' }}>NEED HELP?</p>
                <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '40px' }}>CONTACT SUPPORT</h2>

                <div style={{ backgroundColor: '#111111', padding: '40px', borderRadius: '4px', borderTop: '3px solid #e74c3c' }}>
                    {error && <p style={{ color: '#e74c3c', marginBottom: '20px', padding: '12px', backgroundColor: '#1a0a0a', borderLeft: '3px solid #e74c3c', fontSize: '0.9rem' }}>{error}</p>}
                    {success && <p style={{ color: '#2ecc71', marginBottom: '20px', padding: '12px', backgroundColor: '#0a1a0a', borderLeft: '3px solid #2ecc71', fontSize: '0.9rem' }}>{success}</p>}

                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '25px' }}>
                            <label style={labelStyle}>YOUR NAME</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" style={inputStyle} />
                        </div>
                        <div style={{ marginBottom: '25px' }}>
                            <label style={labelStyle}>EMAIL ADDRESS</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" style={inputStyle} />
                        </div>
                        <div style={{ marginBottom: '35px' }}>
                            <label style={labelStyle}>MESSAGE</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Describe your issue or question..." rows="5" style={{ ...inputStyle, resize: 'vertical' }} />
                        </div>
                        <button type="submit" disabled={loading} style={{ width: '100%', padding: '14px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', fontSize: '1rem', fontWeight: '700', cursor: 'pointer', letterSpacing: '1px' }}>
                            {loading ? 'SENDING...' : 'SEND MESSAGE →'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;