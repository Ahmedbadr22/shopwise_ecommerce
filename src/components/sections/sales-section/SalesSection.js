import banner1 from "../../../images/furniture_banner1_sales.jpg";
import banner2 from "../../../images/furniture_banner2_sales.jpg";
import OwlCarousel from 'react-owl-carousel';
import MainProductCard from "../../card/product-card-1/MainProductCard";
import "./sales-section-style.css";

const SalesSection = () =>{
    return(
        <div className="container mb-5">
            <div className="exclusive-product-section-header">
                <span className="section-title">Sales</span>
                <a href="/" className="view-all">
                    <span>View All</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                        <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
                    </svg>  
                </a>
            </div>
            <div className="sales-secton-body">
                <div className="sales-banner">
                    <div className="banner1" style={{backgroundImage: `url(${banner1})`}}>
                        <div className="banner1-content">
                            <h6>Super Sale</h6>
                            <h2 className=" pb-3">New Collection</h2>
                            <a href="/" className="carousel-btn">Shop Now</a>
                        </div>
                    </div>
                    <div className="banner2" style={{backgroundImage: `url(${banner2})`}}>
                        <div className="banner2-content">
                            <h6>New Season</h6>
                            <h2 className=" pb-3">Sale 40% Off</h2>
                            <a href="/" className="carousel-btn">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="flash-deals w-100">
                    <OwlCarousel
                        className="owl-theme"
                        nav
                        autoPlay
                        dots={false}
                        smartSpeed={2000}
                        responsive={
                            {
                                0:{
                                    items:1
                                },
                                500:{
                                    items:1
                                },
                                700:{
                                    items:2
                                },
                                1000:{
                                    items:3
                                },
                                1200:{
                                    items:4
                                }
                            }
                        }
                        >
                        <div className="item">
                            <MainProductCard />
                        </div>
                        <div className="item">
                            <MainProductCard />
                        </div>
                        <div className="item">
                            <MainProductCard />
                        </div>
                        <div className="item">
                            <MainProductCard />
                        </div>
                        <div className="item">
                            <MainProductCard />
                        </div>
                        <div className="item">
                            <MainProductCard />
                        </div>
                        <div className="item">
                            <MainProductCard />
                        </div>
                        <div className="item">
                            <MainProductCard />
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    );
};

export default SalesSection;