import { Link } from 'react-router-dom';

const Confirmation = () => {
    return (
        <div className="container my-5 text-center py-5 animate-fade-in">
            <div className="mx-auto border border-dark p-5 bg-light rounded-0 shadow-sm" style={{ maxWidth: '650px' }}>
                <i className="bi bi-check-circle-fill text-success mb-4 d-block" style={{ fontSize: '4.5rem' }}></i>
                <h2 className="fw-bold text-uppercase tracking-wider mb-2 text-dark">Order Confirmed</h2>
                <p className="text-muted small text-uppercase fw-semibold tracking-widest mb-4">
                    Receipt ID: #ORA-2026-98432
                </p>
                <hr className="border-dark my-4" />
                <h5 className="fw-bold text-uppercase mb-2">Thank You for Shopping with Ora Threads!</h5>
                <p className="text-muted mb-4 px-md-3 small">
                    Your mock payment has been successfully authorized. A digital confirmation receipt 
                    along with shipping details and live tracking links has been routed to your registered email address.
                </p>
                <div className="bg-white p-4 border border-dashed border-dark my-4 rounded-0 shadow-sm">
                    <h6 className="fw-bold text-uppercase text-dark mb-2">Help Us Perfect the Silhouette</h6>
                    <p className="small text-muted mb-3 px-1">
                        We are continuously tailoring the Ora Threads digital interface to match your aesthetic standards. 
                        Could you spare 30 seconds to let us know how your browsing experience felt?
                    </p>
                    <Link to="/survey" className="btn btn-dark rounded-0 px-4 py-2 text-uppercase fw-bold btn-sm tracking-wider shadow-sm">
                        Take Quick Survey
                    </Link>
                </div>
                <div className="mt-5">
                    <Link to="/" className="btn btn-outline-dark rounded-0 px-4 py-2 text-uppercase fw-bold small">
                        Continue Browsing
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;