import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const AdminRequests = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const { token } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        try {
            const res = await axios.get('https://medical-credentialing-backend.onrender.com/api/requests/all', {
                headers: { Authorization: 'Bearer ' + token }
            });
            setRequests(res.data);
        } catch (err) {
            console.error(err);
        }
        setLoading(false);
    };

    const updateStatus = async (id, status) => {
        try {
            await axios.put(
                'https://medical-credentialing-backend.onrender.com/api/requests/' + id + '/status',
                { status },
                { headers: { Authorization: 'Bearer ' + token } }
            );
            fetchRequests();
        } catch (err) {
            console.error(err);
        }
    };

    const getStatusColor = (status) => {
        if (status === 'approved') return '#2ecc71';
        if (status === 'rejected') return '#e74c3c';
        return '#f39c12';
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white', padding: 'clamp(20px, 5vw, 60px)' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <button onClick={() => navigate('/admin/dashboard')} style={{ background: 'none', border: 'none', color: '#e74c3c', cursor: 'pointer', marginBottom: '30px', fontSize: '0.9rem', letterSpacing: '1px', fontWeight: '700' }}>
                    ← BACK TO DASHBOARD
                </button>
                <p style={{ color: '#e74c3c', letterSpacing: '3px', fontSize: '0.85rem', fontWeight: '700', marginBottom: '10px' }}>MANAGE APPLICATIONS</p>
                <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '40px' }}>ALL REQUESTS</h2>

                {loading && <p style={{ color: '#666' }}>Loading...</p>}

                {!loading && requests.length === 0 && (
                    <div style={{ backgroundColor: '#111111', padding: '60px', borderRadius: '4px', textAlign: 'center', borderTop: '3px solid #e74c3c' }}>
                        <p style={{ color: '#666' }}>No requests found!</p>
                    </div>
                )}

                {!loading && requests.map((req) => (
                    <div key={req.id} style={{ backgroundColor: '#111111', padding: '30px', borderRadius: '4px', marginBottom: '20px', borderLeft: '3px solid ' + getStatusColor(req.status) }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: 0 }}>{req.jobRole}</h3>
                            <span style={{ padding: '5px 15px', backgroundColor: getStatusColor(req.status), color: 'white', borderRadius: '3px', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1px' }}>
                                {req.status.toUpperCase()}
                            </span>
                        </div>
                        <p style={{ color: '#777', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '15px' }}>{req.description}</p>
                        <p style={{ color: '#555', fontSize: '0.85rem', marginBottom: '5px' }}>
                            👤 {req.user?.name} — {req.user?.email}
                        </p>
                        <p style={{ color: '#555', fontSize: '0.85rem', marginBottom: '20px' }}>
                            📅 Deadline: {new Date(req.deadline).toLocaleDateString()}
                        </p>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button
                                onClick={() => updateStatus(req.id, 'approved')}
                                style={{ padding: '10px 20px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '1px' }}
                            >
                                ✓ APPROVE
                            </button>
                            <button
                                onClick={() => updateStatus(req.id, 'rejected')}
                                style={{ padding: '10px 20px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '1px' }}
                            >
                                ✕ REJECT
                            </button>
                            <button
                                onClick={() => updateStatus(req.id, 'pending')}
                                style={{ padding: '10px 20px', backgroundColor: '#f39c12', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '1px' }}
                            >
                                ⏳ PENDING
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminRequests;