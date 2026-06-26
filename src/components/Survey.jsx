import { useState } from 'react';
import { Link } from 'react-router-dom';

const Survey = () => {
    const [submitted, setSubmitted] = useState(false);
    const [rating, setRating] = useState("");
    const [comments, setComments] = useState("");
    const [recommend, setRecommend] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleReset = () => {
        setRating("");
        setComments("");
        setRecommend("");
    };

    return (
        <div className="container my-5 animate-fade-in">
            <div className="mx-auto border border-dark p-5 bg-light rounded-0 shadow-sm" style={{ maxWidth: '600px' }}>
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-uppercase tracking-wider text-dark mb-2">Interface Feedback</h2>
                    <p className="text-muted small text-uppercase fw-semibold tracking-widest border-bottom border-dark pb-3">
                        Ora Threads System Evaluation
                    </p>
                </div>
                {submitted ? (
                    <div className="text-center py-4 animate-fade-in">
                        <i className="bi bi-heart-fill text-dark mb-3 d-block" style={{ fontSize: '3rem' }}></i>
                        <h4 className="fw-bold text-uppercase">Feedback Received!</h4>
                        <p className="text-muted small px-3">
                            Thank you for connecting with us. Your evaluation inputs have been logged. They will directly 
                            influence our upcoming seasonal digital updates and layout optimizations.
                        </p>
                        <div className="mt-4">
                            <Link to="/" className="btn btn-dark rounded-0 px-4 py-2 text-uppercase fw-bold btn-sm tracking-wider shadow-sm">
                                Back to Shop
                            </Link>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="form-label text-uppercase small fw-bold text-dark d-block mb-2">
                                1. How would you rate the clarity of our Faceted Search?
                            </label>
                            <div className="d-flex flex-column gap-2 bg-white p-3 border border-dark rounded-0">
                                {[
                                    { value: "excellent", label: "Seamless – Finding specific items was effortless" },
                                    { value: "good", label: "Functional – Filters matched my shopping criteria" },
                                    { value: "average", label: "Moderate – Layout and sorting could be clearer" },
                                    { value: "poor", label: "Obstructed – Had difficulty converging on designs" }
                                ].map((option) => (
                                    <div className="form-check" key={option.value}>
                                        <input
                                            className="form-check-input border-dark"
                                            type="radio"
                                            name="rating"
                                            id={`rating-${option.value}`}
                                            value={option.value}
                                            checked={rating === option.value}
                                            onChange={(e) => setRating(e.target.value)}
                                            required
                                        />
                                        <label className="form-check-label small fw-medium" htmlFor={`rating-${option.value}`}>
                                            {option.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="form-label text-uppercase small fw-bold text-dark d-block mb-2">
                                2. Would you recommend Ora Threads to others based on layout usage?
                            </label>
                            <div className="d-flex gap-4 bg-white p-3 border border-dark rounded-0">
                                <div className="form-check">
                                    <input
                                        className="form-check-input border-dark"
                                        type="radio"
                                        name="recommend"
                                        id="recommend-yes"
                                        value="yes"
                                        checked={recommend === "yes"}
                                        onChange={(e) => setRecommend(e.target.value)}
                                        required
                                    />
                                    <label className="form-check-label small fw-semibold text-uppercase" htmlFor="recommend-yes">Yes</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input border-dark"
                                        type="radio"
                                        name="recommend"
                                        id="recommend-no"
                                        value="no"
                                        checked={recommend === "no"}
                                        onChange={(e) => setRecommend(e.target.value)}
                                    />
                                    <label className="form-check-label small fw-semibold text-uppercase" htmlFor="recommend-no">No</label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="comments" className="form-label text-uppercase small fw-bold text-dark d-block mb-2">
                                3. Additional System Observations or Usability Notes (Optional)
                            </label>
                            <textarea
                                className="form-control rounded-0 border-dark p-3 small"
                                id="comments"
                                rows="3"
                                placeholder="Type structural notes, contrast critiques, or menu improvement text here..."
                                value={comments}
                                onChange={(e) => setComments(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-4 gap-3">
                            <button
                                type="button"
                                onClick={handleReset}
                                className="btn btn-outline-dark rounded-0 px-3 py-2 text-uppercase fw-bold small"
                                disabled={!rating && !comments && !recommend}
                            >
                                Clear
                            </button>
                            <button
                                type="submit"
                                className="btn btn-dark rounded-0 flex-grow-1 py-2 text-uppercase fw-bold tracking-wider shadow-sm"
                            >
                                Submit Evaluation
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Survey;