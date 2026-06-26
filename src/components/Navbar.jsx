import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ cart }) => {
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
            <div className="container-fluid">
                <Link to="/" className="fs-3 fw-bold tracking-wider text-uppercase text-white">Ora Threads</Link>
                <ul className="navbar-nav ms-4 gap-3 mb-2 mb-lg-0">
                    <NavLink className="nav-link" to="/">Shop</NavLink>
                    <NavLink className="nav-link" to="/survey">Leave a Review</NavLink>
                </ul>
                <div className="d-flex align-items-center">
                    <Link className="btn btn-outline-light position-relative d-flex align-items-center px-3 py-2 rounded-0" to="/cart">
                        <i className="bi bi-cart fs-5 me-2"></i>
                    </Link>
                    <span className="badge bg-white text-dark ms-1 fw-bold">{totalQuantity}</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;