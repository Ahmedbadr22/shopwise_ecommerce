import "./product-slider-style.css";
import MainProductCard from "../card/product-card-1/MainProductCard";
import OwlCarousel from "react-owl-carousel";

const ProductSlider = () => {
    return(
        <div className="main-slider">
            <OwlCarousel
                className="owl-theme"
                nav
                autoplay={true}
                dots={false}
                loop
                smartSpeed={1500}
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
            </OwlCarousel>
        </div>
    );
};

export default ProductSlider;