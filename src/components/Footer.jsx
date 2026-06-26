import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-3 border-top border-secondary mt-auto">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5 className="fw-bold text-uppercase tracking-wider text-white mb-3">Ora Threads</h5>
                        <p className="text-white-50 small lh-base" style={{ maxWidth: '320px' }}>
                            Architectural streetwear silhouettes engineered with premium, sustainable materials. 
                            Designed with minimalist aesthetics for contemporary urban landscapes.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 text-md-center">
                        <h6 className="fw-bold text-uppercase tracking-wider text-white mb-3">Shop</h6>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <Link to="/" className="text-white-50 link-light text-decoration-none small d-block my-2 transition-color hover-white">
                                    All Collections
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-white-50 link-light text-decoration-none small d-block my-2 transition-color hover-white">
                                    New Streetwear Arrivals
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-white-50 link-light text-decoration-none small d-block my-2 transition-color hover-white">
                                    Minimalist Essentials
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-10 mb-4 text-lg-end">
                        <h6 className="fw-bold text-uppercase tracking-wider text-white mb-3">Interface Experience</h6>
                        <p className="text-white-50 small lh-base mb-3 ms-lg-auto" style={{ maxWidth: '320px' }}>
                            Help us refine our system image. Take our quick 30-second user experience evaluation.
                        </p>
                        <Link to="/survey" className="btn btn-sm btn-outline-light rounded-0 text-uppercase fw-bold tracking-wider px-3 py-2 shadow-sm">
                            Leave Feedback
                        </Link>
                    </div>
                </div>
                <div className="row mt-4 pt-3 border-top border-secondary">
                    <div className="col-12 text-center">
                        <p className="text-white-50 mb-0" style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>
                            &copy; 2026 ORA THREADS. Built for SEG3125 Assignment 4. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;