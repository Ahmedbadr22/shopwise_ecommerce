import "./trending-items-style.css";
import ProductSlider from "../../product-slider/ProductSlider";


const TrendingItems = () => {
    return(
        <div className="trending-items-section container">
            <div className="trending-items-product-section-header">
                <span className="section-title">Trending Items</span>
                <a href="/" className="view-all">
                    <span>View All</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                        <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
                    </svg>
                </a>
            </div>
            <ProductSlider />
        </div>
    );
};

export default TrendingItems;