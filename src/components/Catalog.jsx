    import { useState } from 'react';
import { products } from '../products.js';

const Catalog = ({ addToCart }) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [maxPrice, setMaxPrice] = useState(200);
    const [productSizeSelections, setProductSizeSelections] = useState({});

    const handleSizeChange = (size) => {
        if (selectedSizes.includes(size)) {
            setSelectedSizes(selectedSizes.filter(s => s !== size));
        } else {
            setSelectedSizes([...selectedSizes, size]);
        }
    };

    const handleColorChange = (color) => {
        if (selectedColors.includes(color)) {
            setSelectedColors(selectedColors.filter(c => c !== color));
        } else {
            setSelectedColors([...selectedColors, color]);
        }
    };

    const handleLocalSizeSelect = (productId, size) => {
        setProductSizeSelections({
            ...productSizeSelections,
            [productId]: size
        });
    };

    const filteredProducts = products.filter((product) => {
        const matchesCategory = selectedCategory === "" || product.category === selectedCategory;
        const matchesSize = selectedSizes.length === 0 || product.size.some(s => selectedSizes.includes(s));
        const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color);
        const matchesPrice = product.price <= maxPrice;
        return matchesCategory && matchesSize && matchesColor && matchesPrice;
    });

    const clearAll = () => {
        setSelectedCategory("");
        setSelectedSizes([]);
        setSelectedColors([]);
        setMaxPrice(200);
    };

    return (
        <div className="container my-5">
            <div className="alert bg-black text-white text-center rounded-0 my-3 py-3 letter-spacing">
                ⚡ SUMMER DRIFT DISCOVERY: USE CODE <strong className="text-warning">ORA20</strong> FOR 20% OFF ALL STREETWEAR ESSENTIALS.
            </div>
            <div className="row mt-4">
                <div className="col-lg-3 col-md-4 mb-5">
                    <div className="p-4 border border-dark rounded-0 bg-light shadow-sm">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="fw-bold mb-0 text-uppercase tracking-wider">Filters</h5>
                            <button onClick={clearAll} className="btn btn-sm btn-link text-dark text-decoration-underline p-0 rounded-0" style={{ fontSize: '0.85rem' }}>
                                Clear All
                            </button>
                        </div>
                        <div className="mb-4">
                            <label className="form-label fw-semibold text-muted small text-uppercase">Category</label>
                            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="form-select rounded-0 border-dark">
                                <option value="">All Categories</option>
                                <option value="shirts">Shirts</option>
                                <option value="pants">Pants</option>
                                <option value="outerwear">Outerwear</option>
                                <option value="footwear">Footwear</option>
                                <option value="accessories">Accessories</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="form-label fw-semibold text-muted small text-uppercase mb-2">Sizes</label>
                            {["S", "M", "L", "XL"].map(size => (
                                <div className="form-check my-1" key={size}>
                                    <input
                                        className="form-check-input border-dark rounded-0"
                                        type="checkbox"
                                        id={`size-${size}`}
                                        checked={selectedSizes.includes(size)}
                                        onChange={() => handleSizeChange(size)}
                                    />
                                    <label className="form-check-label text-uppercase fw-medium" htmlFor={`size-${size}`}>
                                        {size}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className="mb-4">
                            <label className="form-label fw-semibold text-muted small text-uppercase mb-2">Colors</label>
                            {["black", "cream", "slate"].map(color => (
                                <div className="form-check my-1" key={color}>
                                    <input
                                        className="form-check-input border-dark rounded-0"
                                        type="checkbox"
                                        id={`color-${color}`}
                                        checked={selectedColors.includes(color)}
                                        onChange={() => handleColorChange(color)}
                                    />
                                    <label className="form-check-label text-capitalize fw-medium" htmlFor={`color-${color}`}>
                                        {color}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className="mb-3">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <label className="form-label fw-semibold text-muted small text-uppercase mb-0">Max Price</label>
                                <span className="fw-bold fs-6">${maxPrice}</span>
                            </div>
                            <input
                                type="range"
                                className="form-range custom-slider accent-dark"
                                min="20"
                                max="200"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                            />
                            <div className="d-flex justify-content-between text-muted x-small" style={{ fontSize: '0.75rem' }}>
                                <span>$20</span>
                                <span>$200</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-8">
                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-5 border border-dashed rounded-0 bg-light my-3">
                            <i className="bi bi-search fs-1 text-muted mb-3 d-block"></i>
                            <h4 className="fw-bold">No results match your selected filters.</h4>
                            <p className="text-muted">Try clearing some facets or modifying your price cap to see items.</p>
                            <button onClick={clearAll} className="btn btn-dark rounded-0 px-4 mt-2">Reset Browsing Filters</button>
                        </div>
                    ) : (
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                            {filteredProducts.map(product => {
                                const currentSizeSelection = productSizeSelections[product.id] || product.size[0];

                                return (
                                    <div className="col animate-fade-in" key={product.id}>
                                        <div className="card h-100 border-0 shadow-sm rounded-0 bg-white">
                                            <div className="position-relative overflow-hidden bg-light" style={{ height: "300px" }}>
                                                <img
                                                    src={product.image}
                                                    className="card-img-top rounded-0 w-100 h-100"
                                                    alt={product.name}
                                                    style={{ objectFit: "cover", transition: "transform 0.3s ease" }}
                                                />
                                                <span className="position-absolute top-0 end-0 bg-dark text-white text-capitalize small px-2 py-1 m-2 fw-medium letter-spacing-sm">
                                                    {product.color}
                                                </span>
                                            </div>
                                            <div className="card-body d-flex flex-column px-2 py-3 bg-white">
                                                <div className="d-flex justify-content-between align-items-start mb-1">
                                                    <h6 className="card-title fw-bold text-uppercase mb-0 tracking-tight text-truncate me-2" style={{ maxWidth: '75%' }}>
                                                        {product.name}
                                                    </h6>
                                                    <span className="fs-6 fw-bold text-dark text-nowrap">${product.price}</span>
                                                </div>
                                                <p className="card-text text-muted x-small line-height-sm mb-3 flex-grow-1" style={{ fontSize: '0.8rem', minHeight: '38px' }}>
                                                    Premium architecture streetwear silhouette. Engineered with luxury 100% heavy organic tactile materials.
                                                </p>
                                                <div className="mb-3">
                                                    <label className="text-uppercase text-muted fw-bold x-small d-block mb-1" style={{ fontSize: '0.7rem' }}>Select Size</label>
                                                    <select
                                                        className="form-select form-select-sm rounded-0 border-dark"
                                                        value={currentSizeSelection}
                                                        onChange={(e) => handleLocalSizeSelect(product.id, e.target.value)}
                                                    >
                                                        {product.size.map(s => (
                                                            <option key={s} value={s}>{s}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <button
                                                    onClick={() => addToCart(product, currentSizeSelection)}
                                                    className="btn btn-dark btn-sm rounded-0 w-100 py-2 text-uppercase font-weight-bold letter-spacing-sm transition-fill"
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Catalog;