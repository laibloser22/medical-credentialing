import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#0a0a0a', color: 'white', minHeight: '100vh' }}>

            {/* Navbar */}
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 60px', backgroundColor: '#111111', borderBottom: '1px solid #e74c3c', position: 'sticky', top: 0, zIndex: 100 }}>
                <h1 style={{ color: '#e74c3c', fontSize: '1.8rem', fontWeight: '800', letterSpacing: '1px' }}>QUAD<span style={{ color: 'white' }}>SOLUTIONS</span></h1>
                <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                    <Link to="/" style={{ color: '#ccc', fontSize: '0.95rem', letterSpacing: '1px' }}>HOME</Link>
                    <Link to="/login" style={{ color: '#ccc', fontSize: '0.95rem', letterSpacing: '1px' }}>LOGIN</Link>
                    <Link to="/register">
                        <button style={{ padding: '10px 25px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', fontWeight: '700', cursor: 'pointer', letterSpacing: '1px' }}>
                            GET STARTED
                        </button>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <div style={{ padding: '120px 60px', background: 'linear-gradient(135deg, #111111 0%, #1a0a0a 100%)', borderBottom: '1px solid #222' }}>
                <div style={{ maxWidth: '700px' }}>
                    <p style={{ color: '#e74c3c', letterSpacing: '3px', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>MEDICAL CREDENTIALING EXPERTS</p>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: '900', lineHeight: '1.1', marginBottom: '25px' }}>
                        GET CREDENTIALED <span style={{ color: '#e74c3c' }}>FASTER</span> THAN EVER BEFORE
                    </h2>
                    <p style={{ color: '#999', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '40px', maxWidth: '500px' }}>
                        We help healthcare professionals navigate the credentialing process with speed, accuracy, and complete transparency.
                    </p>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <Link to="/register">
                            <button style={{ padding: '15px 40px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', fontSize: '1rem', fontWeight: '700', cursor: 'pointer', letterSpacing: '1px' }}>
                                START NOW →
                            </button>
                        </Link>
                        <Link to="/login">
                            <button style={{ padding: '15px 40px', backgroundColor: 'transparent', color: 'white', border: '1px solid #444', borderRadius: '4px', fontSize: '1rem', fontWeight: '700', cursor: 'pointer', letterSpacing: '1px' }}>
                                LOGIN
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0', backgroundColor: '#111111', borderBottom: '1px solid #222' }}>
                {[
                    { number: '500+', label: 'PROVIDERS CREDENTIALED' },
                    { number: '98%', label: 'SUCCESS RATE' },
                    { number: '24/7', label: 'SUPPORT AVAILABLE' },
                    { number: '15+', label: 'YEARS EXPERIENCE' }
                ].map((stat, i) => (
                    <div key={i} style={{ padding: '40px 60px', borderRight: i < 3 ? '1px solid #222' : 'none', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#e74c3c' }}>{stat.number}</h3>
                        <p style={{ color: '#666', fontSize: '0.75rem', letterSpacing: '2px', marginTop: '5px' }}>{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Services Section */}
            <div style={{ padding: '80px 60px', backgroundColor: '#0a0a0a' }}>
                <p style={{ color: '#e74c3c', letterSpacing: '3px', fontSize: '0.85rem', fontWeight: '700', marginBottom: '15px' }}>WHAT WE OFFER</p>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '50px' }}>OUR SERVICES</h2>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    {[
                        { title: 'Primary Source Verification', desc: 'We verify all credentials directly from the original issuing source for complete accuracy.' },
                        { title: 'License Monitoring', desc: 'Continuous monitoring of licenses and certifications to ensure ongoing compliance.' },
                        { title: 'Credential Management', desc: 'Complete management of your credentialing portfolio in one secure platform.' },
                        { title: 'Expiration Tracking', desc: 'Never miss a renewal with our automated expiration tracking system.' }
                    ].map((service, i) => (
                        <div key={i} style={{ padding: '35px', backgroundColor: '#111111', borderRadius: '4px', width: '280px', borderLeft: '3px solid #e74c3c', flex: '1', minWidth: '220px' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '15px', color: 'white' }}>{service.title}</h3>
                            <p style={{ color: '#777', lineHeight: '1.7', fontSize: '0.9rem' }}>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Us */}
            <div style={{ padding: '80px 60px', backgroundColor: '#111111', borderTop: '1px solid #222', borderBottom: '1px solid #222' }}>
                <p style={{ color: '#e74c3c', letterSpacing: '3px', fontSize: '0.85rem', fontWeight: '700', marginBottom: '15px' }}>WHY US</p>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '50px' }}>WHY CHOOSE QUAD SOLUTIONS?</h2>
                <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                    {[
                        { icon: '⚡', title: 'Fast Processing', desc: 'Get credentialed in record time with our streamlined process.' },
                        { icon: '🔒', title: 'Secure & Reliable', desc: 'Your data is protected with enterprise-grade security.' },
                        { icon: '👥', title: 'Expert Team', desc: 'Our team has decades of combined credentialing experience.' },
                        { icon: '📊', title: 'Full Transparency', desc: 'Track your application status in real time, always.' }
                    ].map((item, i) => (
                        <div key={i} style={{ padding: '35px', backgroundColor: '#0a0a0a', borderRadius: '4px', flex: '1', minWidth: '200px', textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{item.icon}</div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '10px' }}>{item.title}</h3>
                            <p style={{ color: '#777', fontSize: '0.9rem', lineHeight: '1.7' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Section */}
            <div style={{ padding: '80px 60px', backgroundColor: '#0a0a0a', textAlign: 'center' }}>
                <p style={{ color: '#e74c3c', letterSpacing: '3px', fontSize: '0.85rem', fontWeight: '700', marginBottom: '15px' }}>GET IN TOUCH</p>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '20px' }}>HAVE QUESTIONS?</h2>
                <p style={{ color: '#777', marginBottom: '40px', fontSize: '1rem' }}>Our team is ready to help you get started</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    <p style={{ color: '#ccc' }}>📧 support@quadsolutions.com</p>
                    <p style={{ color: '#ccc' }}>📞 +1 (800) 123-4567</p>
                </div>
            </div>

            {/* Footer */}
            <footer style={{ backgroundColor: '#111111', borderTop: '1px solid #e74c3c', color: '#666', textAlign: 'center', padding: '25px' }}>
                <p style={{ letterSpacing: '1px', fontSize: '0.85rem' }}>© 2026 QUAD SOLUTIONS. ALL RIGHTS RESERVED.</p>
            </footer>

        </div>
    );
};

export default Home;