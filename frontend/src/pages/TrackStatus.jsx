import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const TrackStatus = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const { token } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const res = await axios.get('https://medical-credentialing-backend.onrender.com/api/requests/my-requests', {
                    headers: { Authorization: 'Bearer ' + token }
                });
                setRequests(res.data);
            } catch (err) {
                console.error(err);
            }
            setLoading(false);
        };
        fetchRequests();
    }, [token]);

    const getStatusColor = (status) => {
        if (status === 'approved') return '#2ecc71';
        if (status === 'rejected') return '#e74c3c';
        return '#f39c12';
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white', padding: '60px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <button onClick={() => navigate('/dashboard')} style={{ background: 'none', border: 'none', color: '#e74c3c', cursor: 'pointer', marginBottom: '30px', fontSize: '0.9rem', letterSpacing: '1px', fontWeight: '700' }}>
                    ← BACK TO DASHBOARD
                </button>
                <p style={{ color: '#e74c3c', letterSpacing: '3px', fontSize: '0.85rem', fontWeight: '700', marginBottom: '10px' }}>MY APPLICATIONS</p>
                <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '40px' }}>TRACK STATUS</h2>

                {loading && <p style={{ color: '#666' }}>Loading...</p>}

                {!loading && requests.length === 0 && (
                    <div style={{ backgroundColor: '#111111', padding: '60px', borderRadius: '4px', textAlign: 'center', borderTop: '3px solid #e74c3c' }}>
                        <p style={{ color: '#666', marginBottom: '20px' }}>No requests found!</p>
                        <button onClick={() => navigate('/submit-request')} style={{ padding: '12px 25px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '700', letterSpacing: '1px' }}>
                            SUBMIT FIRST REQUEST →
                        </button>
                    </div>
                )}

                {!loading && requests.map((req) => (
                    <div key={req.id} style={{ backgroundColor: '#111111', padding: '30px', borderRadius: '4px', marginBottom: '20px', borderLeft: '3px solid ' + getStatusColor(req.status) }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '700' }}>{req.jobRole}</h3>
                            <span style={{ padding: '5px 15px', backgroundColor: getStatusColor(req.status), color: 'white', borderRadius: '3px', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1px' }}>
                                {req.status.toUpperCase()}
                            </span>
                        </div>
                        <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '15px' }}>{req.description}</p>
                        <div style={{ display: 'flex', gap: '30px' }}>
                            <p style={{ color: '#555', fontSize: '0.85rem' }}>📅 Deadline: {new Date(req.deadline).toLocaleDateString()}</p>
                            <p style={{ color: '#555', fontSize: '0.85rem' }}>🕐 Submitted: {new Date(req.createdAt).toLocaleDateString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrackStatus;