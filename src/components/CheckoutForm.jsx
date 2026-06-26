import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ cart, clearCart }) => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        cardName: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });
    const [promoCode, setPromoCode] = useState("");
    const [isDiscountApplied, setIsDiscountApplied] = useState(false);
    const [promoError, setPromoError] = useState("");
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmount = isDiscountApplied ? subtotal * 0.20 : 0;
    const finalTotal = subtotal - discountAmount;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleApplyPromo = (e) => {
        e.preventDefault();
        if (promoCode.toUpperCase() === "ORA20") {
            setIsDiscountApplied(true);
            setPromoError("");
        } else {
            setPromoError("Invalid discount code");
        }
    };

    const nextStep = (e) => {
        e.preventDefault();
        const shippingForm = document.getElementById('checkout-form');
        if (shippingForm.checkValidity()) {
            setStep(2);
        } else {
            shippingForm.reportValidity();
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        clearCart();
        navigate('/confirmation');
    };

    if (cart.length === 0) {
        return (
            <div className="container my-5 text-center py-5">
                <i className="bi bi-shield-exclamation fs-1 text-muted mb-3 d-block"></i>
                <h3 className="fw-bold text-uppercase">No Active Checkout Session</h3>
                <p className="text-muted">Your shopping cart is empty. Add elements before entering secure gates.</p>
                <button onClick={() => navigate('/')} className="btn btn-dark rounded-0 px-4 text-uppercase fw-bold">Go back to shop</button>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <h2 className="fw-bold text-uppercase tracking-wider mb-5 text-center">Secure Checkout</h2>
            <div className="row mb-5 justify-content-center">
                <div className="col-md-8 d-flex justify-content-between position-relative">
                    <span className={`fw-bold text-uppercase small pb-2 flex-grow-1 text-center border-bottom border-2 ${step === 1 ? 'border-dark text-dark' : 'border-light text-muted bg-light'}`} style={{ transition: 'all 0.3s' }}>
                        1. Shipping Address
                    </span>
                    <span className={`fw-bold text-uppercase small pb-2 flex-grow-1 text-center border-bottom border-2 ${step === 2 ? 'border-dark text-dark' : 'border-light text-muted bg-light'}`} style={{ transition: 'all 0.3s' }}>
                        2. Payment Details
                    </span>
                </div>
            </div>
            <form id="checkout-form" className="row g-5" onSubmit={handleFormSubmit}>
                <div className="col-lg-7">
                    {step === 1 && (
                        <div className="animate-fade-in">
                            <h4 className="fw-bold text-uppercase mb-4 tracking-tight">Shipping Information</h4>
                            <div className="mb-3">
                                <label className="form-label text-uppercase small fw-bold text-muted" style={{ fontSize: '0.75rem' }}>Full Name</label>
                                <input type="text" name="fullName" className="form-control rounded-0 border-dark py-2" value={formData.fullName} onChange={handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-uppercase small fw-bold text-muted" style={{ fontSize: '0.75rem' }}>Email Address</label>
                                <input type="email" name="email" className="form-control rounded-0 border-dark py-2" value={formData.email} onChange={handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-uppercase small fw-bold text-muted" style={{ fontSize: '0.75rem' }}>Street Address</label>
                                <input type="text" name="address" className="form-control rounded-0 border-dark py-2" value={formData.address} onChange={handleInputChange} required />
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label text-uppercase small fw-bold text-muted" style={{ fontSize: '0.75rem' }}>City</label>
                                    <input type="text" name="city" className="form-control rounded-0 border-dark py-2" value={formData.city} onChange={handleInputChange} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label text-uppercase small fw-bold text-muted" style={{ fontSize: '0.75rem' }}>Postal Code</label>
                                    <input type="text" name="postalCode" className="form-control rounded-0 border-dark py-2" placeholder="K1N 6N5" value={formData.postalCode} onChange={handleInputChange} required />
                                </div>
                            </div>
                            <p className="text-muted small mt-2">
                                <i className="bi bi-info-circle me-1"></i> Orders are processed instantly and shipped via premium carbon-neutral carrier networks.
                            </p>
                            <button type="button" onClick={nextStep} className="btn btn-dark rounded-0 w-100 py-3 text-uppercase fw-bold letter-spacing-sm mt-4 shadow-sm">
                                Continue to Payment
                            </button>
                        </div>
                    )}
                    {step === 2 && (
                        <div className="animate-fade-in">
                            <h4 className="fw-bold text-uppercase mb-4 tracking-tight">Payment Details</h4>
                            <div className="mb-3">
                                <label className="form-label text-uppercase small fw-bold text-muted" style={{ fontSize: '0.75rem' }}>Name on Card</label>
                                <input type="text" name="cardName" className="form-control rounded-0 border-dark py-2" value={formData.cardName} onChange={handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-uppercase small fw-bold text-muted" style={{ fontSize: '0.75rem' }}>Card Number</label>
                                <div className="input-group rounded-0 border-dark">
                                    <span className="input-group-text bg-white border-dark border-end-0 rounded-0"><i className="bi bi-credit-card-2-front"></i></span>
                                    <input type="text" name="cardNumber" className="form-control border-dark border-start-0 rounded-0 py-2" placeholder="0000 0000 0000 0000" value={formData.cardNumber} onChange={handleInputChange} required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <label className="form-label text-uppercase small fw-bold text-muted" style={{ fontSize: '0.75rem' }}>Expiration Date</label>
                                    <input type="text" name="expiry" className="form-control rounded-0 border-dark py-2" placeholder="MM/YY" value={formData.expiry} onChange={handleInputChange} required />
                                </div>
                                <div className="col-6 mb-3">
                                    <label className="form-label text-uppercase small fw-bold text-muted" style={{ fontSize: '0.75rem' }}>CVV Code</label>
                                    <input type="password" name="cvv" className="form-control rounded-0 border-dark py-2" placeholder="***" maxLength="3" value={formData.cvv} onChange={handleInputChange} required />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-4 gap-3">
                                <button type="button" onClick={() => setStep(1)} className="btn btn-outline-dark rounded-0 px-4 py-3 text-uppercase fw-bold">
                                    Back
                                </button>
                                <button type="submit" className="btn btn-success rounded-0 flex-grow-1 py-3 text-uppercase fw-bold tracking-wider shadow-sm">
                                    Place Order (${finalTotal.toFixed(2)})
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="col-lg-5">
                    <div className="p-4 border border-dark bg-light rounded-0 sticky-top shadow-sm" style={{ top: '110px', zIndex: '10' }}>
                        <h5 className="fw-bold text-uppercase border-bottom border-dark pb-2 mb-3 tracking-wider">Review Order</h5>
                        <div className="mb-4 overflow-auto px-1" style={{ maxHeight: '200px' }}>
                            {cart.map(item => (
                                <div className="d-flex justify-content-between align-items-center mb-2 border-bottom border-dashed pb-2" key={`${item.id}-${item.selectedSize}`}>
                                    <div className="text-truncate me-2" style={{ maxWidth: '70%' }}>
                                        <span className="fw-bold text-dark text-uppercase small d-block text-truncate">{item.name}</span>
                                        <span className="text-muted x-small text-uppercase" style={{ fontSize: '0.75rem' }}>Size: {item.selectedSize} × {item.quantity}</span>
                                    </div>
                                    <span className="fw-bold text-dark small text-nowrap">${item.price * item.quantity}</span>
                                </div>
                            ))}
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="text-muted small text-uppercase fw-medium">Subtotal</span>
                            <span className="fw-bold text-dark small">${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom border-dark">
                            <span className="text-muted small text-uppercase fw-medium">Shipping</span>
                            <span className="text-success fw-bold small text-uppercase">Free</span>
                        </div>
                        {isDiscountApplied && (
                            <div className="d-flex justify-content-between align-items-center mb-3 animate-fade-in">
                                <span className="text-muted small text-uppercase fw-medium">Discount (20%)</span>
                                <span className="text-danger fw-bold small">-${discountAmount.toFixed(2)}</span>
                            </div>
                        )}
                        <div className="mb-4 pt-2 border-top border-dashed border-dark">
                            <label className="form-label text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Have a Promo Code?</label>
                            <div className="d-flex gap-2">
                                <input
                                    type="text"
                                    className="form-control rounded-0 border-dark form-control-sm text-uppercase"
                                    placeholder="Enter Code"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                    disabled={isDiscountApplied}
                                />
                                <button
                                    type="button"
                                    onClick={handleApplyPromo}
                                    className="btn btn-sm btn-dark rounded-0 px-3 fw-bold text-uppercase"
                                    disabled={isDiscountApplied}
                                >
                                    Apply
                                </button>
                            </div>
                            {isDiscountApplied && <span className="text-success small fw-bold d-block mt-1">✓ 20% Promo Applied Successfully!</span>}
                            {promoError && <span className="text-danger small fw-bold d-block mt-1">✗ {promoError}</span>}
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <span className="fw-bold text-uppercase fs-6">Total Due</span>
                            <span className="fw-extrabold text-dark fs-4 tracking-tight">${finalTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;