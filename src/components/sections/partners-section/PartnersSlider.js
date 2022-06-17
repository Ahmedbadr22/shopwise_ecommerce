import "./partners-slider-style.css";
import OwlCarousel from "react-owl-carousel";
import partner1 from "../../../images/partener1.jpg";
import partner2 from "../../../images/partener2.jpg";
import partner3 from "../../../images/partener3.png";
import partner4 from "../../../images/partener4.jpg";
import partner5 from "../../../images/partener5.jpg";
import partner6 from "../../../images/partener6.jpg";

const PartnersSlider = () => {
    return(
        <div className="partners-section container">
            <OwlCarousel
                className="owl-theme"
                autoplay={true}
                dots={false}
                margin={40}
                loop
                smartSpeed={1000}
                responsive={
                    {
                        0:{
                            items:2
                        },
                        500:{
                            items:2
                        },
                        700:{
                            items:3
                        },
                        1000:{
                            items:4
                        },
                        1200:{
                            items:6
                        }
                    }
                }
            >
                <div className="item">
                    <img className="partner-img" src={partner1} alt=""/>
                </div>
                <div className="item">
                    <img className="partner-img" src={partner2} alt=""/>
                </div>
                <div className="item">
                    <img className="partner-img" src={partner3} alt=""/>
                </div>
                <div className="item">
                    <img className="partner-img" src={partner4} alt=""/>
                </div>
                <div className="item">
                    <img className="partner-img" src={partner5} alt=""/>
                </div>
                <div className="item">
                    <img className="partner-img" src={partner6} alt=""/>
                </div>
            </OwlCarousel>
        </div>
    );
};

export default PartnersSlider;