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
        if (status === 'approved') return 'green';
        if (status === 'rejected') return 'red';
        return 'orange';
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f0f4ff', padding: '40px' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                    <h2 style={{ color: '#c0392b' }}>All Credentialing Requests</h2>
                    <button
                        onClick={() => navigate('/admin/dashboard')}
                        style={{ padding: '10px 20px', backgroundColor: '#c0392b', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                    >
                        Back to Dashboard
                    </button>
                </div>

                {loading && <p>Loading...</p>}

                {!loading && requests.length === 0 && (
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '10px', textAlign: 'center' }}>
                        <p style={{ color: '#555' }}>No requests found!</p>
                    </div>
                )}

                {!loading && requests.length > 0 && requests.map((req) => (
                    <div key={req.id} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ color: '#c0392b', margin: 0 }}>{req.jobRole}</h3>
                            <span style={{ padding: '5px 15px', backgroundColor: getStatusColor(req.status), color: 'white', borderRadius: '20px', fontSize: '0.9rem' }}>
                                {req.status.toUpperCase()}
                            </span>
                        </div>
                        <p style={{ color: '#555', marginTop: '10px' }}>{req.description}</p>
                        <p style={{ color: '#888', fontSize: '0.9rem' }}>Submitted by: {req.user?.name} ({req.user?.email})</p>
                        <p style={{ color: '#888', fontSize: '0.9rem' }}>Deadline: {new Date(req.deadline).toLocaleDateString()}</p>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                            <button
                                onClick={() => updateStatus(req.id, 'approved')}
                                style={{ padding: '8px 20px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                            >
                                Approve
                            </button>
                            <button
                                onClick={() => updateStatus(req.id, 'rejected')}
                                style={{ padding: '8px 20px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                            >
                                Reject
                            </button>
                            <button
                                onClick={() => updateStatus(req.id, 'pending')}
                                style={{ padding: '8px 20px', backgroundColor: 'orange', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                            >
                                Pending
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminRequests;