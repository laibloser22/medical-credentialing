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
                const res = await axios.get('http://localhost:5000/api/requests/my-requests', {
                    headers: { Authorization: `Bearer ${token}` }
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
        if (status === 'approved') return 'green';
        if (status === 'rejected') return 'red';
        return 'orange';
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f0f4ff', padding: '40px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                    <h2 style={{ color: '#1a73e8' }}>My Requests</h2>
                    <button
                        onClick={() => navigate('/dashboard')}
                        style={{ padding: '10px 20px', backgroundColor: '#1a73e8', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                    >
                        Back to Dashboard
                    </button>
                </div>

                {loading ? (
                    <p>Loading...</p>
                ) : requests.length === 0 ? (
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '10px', textAlign: 'center' }}>
                        <p style={{ color: '#555' }}>No requests found!</p>
                        <button
                            onClick={() => navigate('/submit-request')}
                            style={{ padding: '10px 20px', backgroundColor: '#1a73e8', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', marginTop: '10px' }}
                        >
                            Submit Your First Request
                        </button>
                    </div>
                ) : (
                    requests.map((req) => (
                        <div key={req.id} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ color: '#1a73e8', margin: 0 }}>{req.jobRole}</h3>
                                <span style={{ padding: '5px 15px', backgroundColor: getStatusColor(req.status), color: 'white', borderRadius: '20px', fontSize: '0.9rem' }}>
                                    {req.status.toUpperCase()}
                                </span>
                            </div>
                            <p style={{ color: '#555', marginTop: '10px' }}>{req.description}</p>
                            <p style={{ color: '#888', fontSize: '0.9rem' }}>
                                Deadline: {new Date(req.deadline).toLocaleDateString()}
                            </p>
                            <p style={{ color: '#888', fontSize: '0.9rem' }}>
                                Submitted: {new Date(req.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TrackStatus;