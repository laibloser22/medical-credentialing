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
                const res = await axios.get('http://localhost:5000/api/contact/all', {
                    headers: { Authorization: `Bearer ${token}` }
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
        <div style={{ minHeight: '100vh', backgroundColor: '#f0f4ff', padding: '40px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                    <h2 style={{ color: '#c0392b' }}>Contact Messages</h2>
                    <button
                        onClick={() => navigate('/admin/dashboard')}
                        style={{ padding: '10px 20px', backgroundColor: '#c0392b', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                    >
                        Back to Dashboard
                    </button>
                </div>

                {loading ? (
                    <p>Loading...</p>
                ) : messages.length === 0 ? (
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '10px', textAlign: 'center' }}>
                        <p style={{ color: '#555' }}>No messages found!</p>
                    </div>
                ) : (
                    messages.map((msg) => (
                        <div key={msg.id} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ color: '#c0392b', margin: 0 }}>{msg.name}</h3>
                                <span style={{ color: '#888', fontSize: '0.9rem' }}>
                                    {new Date(msg.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                            <p style={{ color: '#1a73e8', fontSize: '0.9rem' }}>{msg.email}</p>
                            <p style={{ color: '#555', marginTop: '10px' }}>{msg.message}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AdminMessages;