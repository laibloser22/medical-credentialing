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

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f0f4ff', padding: '40px' }}>
            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', maxWidth: '600px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                    <h2 style={{ color: '#1a73e8', margin: 0 }}>Contact Support</h2>
                    <button
                        onClick={() => navigate('/dashboard')}
                        style={{ padding: '10px 20px', backgroundColor: '#1a73e8', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                    >
                        Back
                    </button>
                </div>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', boxSizing: 'border-box' }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', boxSizing: 'border-box' }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            placeholder="Describe your issue or question"
                            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', boxSizing: 'border-box' }}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        style={{ width: '100%', padding: '12px', backgroundColor: '#1a73e8', color: 'white', border: 'none', borderRadius: '6px', fontSize: '1rem', cursor: 'pointer' }}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;