import ProductSlider from "../product-slider/ProductSlider";

const RelatedProductSlider = () => {
    return (
        <div className="related-product container mt-5 mb-5 pb-3">
            <h2 className="section-title mb-4">Related Product</h2>
            <ProductSlider />
        </div>
    );
};

export default RelatedProductSlider;