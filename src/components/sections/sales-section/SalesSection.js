import "./sales-style.css";
import faBan1 from "../../../images/furniture_banner1_sales.jpg";
import faBan2 from "../../../images/furniture_banner2_sales.jpg";
import ProductSlider from "../../product-slider/ProductSlider";

const SalesSection = () =>{
    return(
        <div className="sales-section container mb-5">
            <div className="exclusive-product-section-header">
                <span className="section-title">Sales</span>
                <a href="/" className="view-all">
                    <span>View All</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                        <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
                    </svg>  
                </a>
            </div>
            <div className="sales-section-body">
                <div className="sales-banners">
                    <div className="banner1 shadow-sm" style={{backgroundImage: `url(${faBan1})`}}>
                        <div className="banner1-content">
                            <h6>Super Sale</h6>
                            <h2 className=" pb-3">New Collection</h2>
                            <a href="/" className="carousel-btn">Shop Now</a>
                        </div>
                    </div>
                    <div className="banner2 shadow-sm" style={{backgroundImage: `url(${faBan2})`}}>
                        <div className="banner2-content">
                            <h6>New Season</h6>
                            <h2 className=" pb-3">Sale 40% Off</h2>
                            <a href="/" className="carousel-btn">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sales-product-slider mt-2">
                <div className="sales-product-section-header p-3">
                    <span className="section-middle-title">Products On Sales</span>
                </div>
                <ProductSlider />
            </div>
        </div>
    );
};

export default SalesSection;