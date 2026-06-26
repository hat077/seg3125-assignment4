import { Link } from 'react-router-dom';

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="container my-5">
            <h2 className="fw-bold text-uppercase tracking-wider mb-4 text-center">Shopping Cart</h2>
            {cart.length === 0 ? (
                <div className="text-center py-5 border border-dark bg-light rounded-0">
                    <i className="bi bi-cart-x fs-1 text-muted mb-3 d-block"></i>
                    <p className="fs-5 text-muted mb-4">Your cart is currently empty.</p>
                    <Link to="/" className="btn btn-dark rounded-0 px-4 text-uppercase fw-bold">Return to Shop</Link>
                </div>
            ) : (
                <div className="row g-4">
                    <div className="col-lg-8">
                        {cart.map((item) => {
                            return (
                                <div className="card mb-3 rounded-0 border-dark shadow-sm bg-white" key={`${item.id}-${item.selectedSize}`}>
                                    <div className="row g-0 align-items-center">
                                        <div className="col-3 col-md-2 bg-light">
                                            <img src={item.image} className="img-fluid rounded-0" alt={item.name} style={{ objectFit: 'cover', height: '90px', width: '100%' }} />
                                        </div>
                                        <div className="col-9 col-md-10 card-body d-flex flex-column flex-md-row justify-content-between align-items-md-center py-2 px-3">
                                            <div className="mb-2 mb-md-0">
                                                <h6 className="fw-bold text-uppercase mb-1 text-truncate" style={{ maxWidth: '220px' }}>{item.name}</h6>
                                                <p className="text-muted small mb-0">Size: {item.selectedSize} | Color: {item.color}</p>
                                            </div>
                                            <div className="d-flex align-items-center mb-2 mb-md-0">
                                                <button className="btn btn-sm btn-outline-dark rounded-0 px-2 py-1" onClick={() => updateQuantity(item.id, item.selectedSize, -1)}>
                                                    <i className="bi bi-dash"></i>
                                                </button>
                                                <span className="mx-3 fw-bold border border-dark px-3 py-1 bg-light text-center small" style={{ minWidth: '40px', display: 'inline-block' }}>{item.quantity}</span>
                                                <button className="btn btn-sm btn-outline-dark rounded-0 px-2 py-1" onClick={() => updateQuantity(item.id, item.selectedSize, 1)}>
                                                    <i className="bi bi-plus"></i>
                                                </button>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between justify-content-md-end w-md-auto">
                                                <span className="fw-bold fs-6 me-md-4 text-nowrap">${item.price * item.quantity}</span>
                                                <button className="btn btn-link text-danger p-0 rounded-0 fs-5 border-0 ms-3" onClick={() => removeFromCart(item.id, item.selectedSize)}>
                                                    <i className="bi bi-trash3-fill"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="col-lg-4">
                        <div className="p-4 border border-dark bg-light rounded-0 shadow-sm">
                            <h4 className="fw-bold text-uppercase tracking-wider mb-4 border-bottom border-dark pb-2">Order Summary</h4>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted small text-uppercase fw-semibold">Subtotal</span>
                                <span className="fw-bold text-dark fs-5">${subtotal}</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-3 border-bottom border-dark pb-3">
                                <span className="text-muted small text-uppercase fw-semibold">Shipping</span>
                                <span className="text-success small fw-bold text-uppercase">Free</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <span className="fw-bold text-uppercase fs-6">Estimated Total</span>
                                <span className="fw-extrabold text-dark fs-4 tracking-tight">${subtotal}</span>
                            </div>
                            <Link to="/checkout" className="btn btn-dark w-100 rounded-0 py-3 text-uppercase fw-bold letter-spacing-sm shadow-sm">Proceed to Checkout</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;