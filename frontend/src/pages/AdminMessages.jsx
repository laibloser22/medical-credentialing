import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const AdminMessages = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const { token } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const res = await axios.get('https://medical-credentialing-backend.onrender.com/api/contact/all', {
                    headers: { Authorization: 'Bearer ' + token }
                });
                setMessages(res.data);
            } catch (err) {
                console.error(err);
            }
            setLoading(false);
        };
        fetchMessages();
    }, []);

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white', padding: '60px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <button onClick={() => navigate('/admin/dashboard')} style={{ background: 'none', border: 'none', color: '#e74c3c', cursor: 'pointer', marginBottom: '30px', fontSize: '0.9rem', letterSpacing: '1px', fontWeight: '700' }}>
                    ← BACK TO DASHBOARD
                </button>
                <p style={{ color: '#e74c3c', letterSpacing: '3px', fontSize: '0.85rem', fontWeight: '700', marginBottom: '10px' }}>INBOX</p>
                <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '40px' }}>CONTACT MESSAGES</h2>

                {loading && <p style={{ color: '#666' }}>Loading...</p>}

                {!loading && messages.length === 0 && (
                    <div style={{ backgroundColor: '#111111', padding: '60px', borderRadius: '4px', textAlign: 'center', borderTop: '3px solid #e74c3c' }}>
                        <p style={{ color: '#666' }}>No messages found!</p>
                    </div>
                )}

                {!loading && messages.map((msg) => (
                    <div key={msg.id} style={{ backgroundColor: '#111111', padding: '30px', borderRadius: '4px', marginBottom: '20px', borderLeft: '3px solid #e74c3c' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: 0 }}>{msg.name}</h3>
                            <span style={{ color: '#555', fontSize: '0.85rem' }}>{new Date(msg.createdAt).toLocaleDateString()}</span>
                        </div>
                        <p style={{ color: '#e74c3c', fontSize: '0.85rem', marginBottom: '15px', letterSpacing: '1px' }}>{msg.email}</p>
                        <p style={{ color: '#888', lineHeight: '1.7', fontSize: '0.95rem' }}>{msg.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminMessages;