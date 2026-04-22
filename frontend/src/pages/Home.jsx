import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>

            {/* Navbar */}
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', backgroundColor: '#1a73e8', color: 'white' }}>
                <h1 style={{ margin: 0 }}>Quad Solutions</h1>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                    <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
                    <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <div style={{ textAlign: 'center', padding: '80px 40px', backgroundColor: '#f0f4ff' }}>
                <h2 style={{ fontSize: '2.5rem', color: '#1a73e8' }}>Medical Credentialing Made Simple</h2>
                <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '600px', margin: '20px auto' }}>
                    We help healthcare professionals get credentialed faster and easier than ever before.
                </p>
                <Link to="/register">
                    <button style={{ padding: '15px 40px', backgroundColor: '#1a73e8', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer' }}>
                        Get Started
                    </button>
                </Link>
            </div>

            {/* Services Section */}
            <div style={{ padding: '60px 40px', textAlign: 'center' }}>
                <h2 style={{ color: '#1a73e8' }}>Our Services</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '30px', flexWrap: 'wrap' }}>
                    {['Primary Source Verification', 'License Monitoring', 'Credential Management'].map((service, i) => (
                        <div key={i} style={{ padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '10px', width: '250px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                            <h3 style={{ color: '#1a73e8' }}>{service}</h3>
                            <p style={{ color: '#555' }}>Professional and reliable credentialing services for healthcare providers.</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Us */}
            <div style={{ padding: '60px 40px', backgroundColor: '#f0f4ff', textAlign: 'center' }}>
                <h2 style={{ color: '#1a73e8' }}>Why Choose Us?</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '30px', flexWrap: 'wrap' }}>
                    {['Fast Processing', 'Secure & Reliable', 'Expert Team', '24/7 Support'].map((item, i) => (
                        <div key={i} style={{ padding: '20px', backgroundColor: 'white', borderRadius: '10px', width: '200px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                            <h3 style={{ color: '#1a73e8' }}>{item}</h3>
                            <p style={{ color: '#555' }}>We provide the best credentialing experience.</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Section */}
            <div style={{ padding: '60px 40px', textAlign: 'center' }}>
                <h2 style={{ color: '#1a73e8' }}>Contact Us</h2>
                <p style={{ color: '#555' }}>Have questions? We're here to help!</p>
                <p style={{ color: '#555' }}>📧 support@quadsolutions.com</p>
                <p style={{ color: '#555' }}>📞 +1 (800) 123-4567</p>
            </div>

            {/* Footer */}
            <footer style={{ backgroundColor: '#1a73e8', color: 'white', textAlign: 'center', padding: '20px' }}>
                <p>© 2026 Quad Solutions. All rights reserved.</p>
            </footer>

        </div>
    );
};

export default Home;