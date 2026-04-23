import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const SubmitRequest = () => {
    const [formData, setFormData] = useState({ jobRole: '', description: '', deadline: '' });
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const { token } = useAuth();
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
            const data = new FormData();
            data.append('jobRole', formData.jobRole);
            data.append('description', formData.description);
            data.append('deadline', formData.deadline);
            if (file) data.append('documents', file);

            await axios.post('https://medical-credentialing-backend.onrender.com/api/requests', data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            setSuccess('Request submitted successfully!');
            setTimeout(() => navigate('/track-status'), 2000);
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
        setLoading(false);
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f0f4ff', padding: '40px' }}>
            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', maxWidth: '600px', margin: '0 auto' }}>
                <h2 style={{ color: '#1a73e8', marginBottom: '30px' }}>Submit Credentialing Request</h2>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Job Role</label>
                        <input
                            type="text"
                            name="jobRole"
                            value={formData.jobRole}
                            onChange={handleChange}
                            required
                            placeholder="e.g. Cardiologist"
                            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', boxSizing: 'border-box' }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            placeholder="Describe your qualifications and experience"
                            rows="4"
                            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', boxSizing: 'border-box' }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Deadline</label>
                        <input
                            type="date"
                            name="deadline"
                            value={formData.deadline}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', boxSizing: 'border-box' }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Upload Documents</label>
                        <input
                            type="file"
                            onChange={(e) => setFile(e.target.files[0])}
                            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', boxSizing: 'border-box' }}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button
                            type="button"
                            onClick={() => navigate('/dashboard')}
                            style={{ padding: '12px 20px', backgroundColor: '#gray', color: '#555', border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer' }}
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            style={{ flex: 1, padding: '12px', backgroundColor: '#1a73e8', color: 'white', border: 'none', borderRadius: '6px', fontSize: '1rem', cursor: 'pointer' }}
                        >
                            {loading ? 'Submitting...' : 'Submit Request'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SubmitRequest;