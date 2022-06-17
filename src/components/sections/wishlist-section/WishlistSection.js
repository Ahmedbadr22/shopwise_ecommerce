import "./wishlist-section-style.css";
import ProductSlider from "../../product-slider/ProductSlider";

const WishlistSection = () => {

    return (
        <div className="wishlist-section">
            <div className="wishlist-table">
                <ProductSlider />
            </div>
        </div>
    );
};

export default WishlistSection;