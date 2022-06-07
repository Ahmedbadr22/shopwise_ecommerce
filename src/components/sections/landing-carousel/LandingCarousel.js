import "./landing-carousel-style.css";
import OwlCarousel from 'react-owl-carousel';
import Bannar1 from "../../../images/banner7.jpg";
import Bannar2 from "../../../images/banner8.jpg";
import Bannar3 from "../../../images/banner9.jpg";

const LandingCarousel = () =>{
    return(
        <div className="landing-carousel">
            <OwlCarousel 
                className="owl-theme"
                loop={true}
                autoplay={true}
                smartSpeed={2000}
                items={1}
                nav={false}
                >
                <div className='item' style={{backgroundImage: `url(${Bannar1})`}}>
                    <div className="carousel-content">
                        <h5 className="caption-header-text">Get up to 50% off Today Only!</h5>
                        <h2 className="caption-title-text">Wooden Chair Collection</h2>
                        <p className="caption-des">
                            
                        </p>
                        <a href="/" className="carousel-btn">Shop Now</a>
                    </div>
                </div>
                <div className='item' style={{backgroundImage: `url(${Bannar2})`}}>
                    <div className="carousel-content">
                        <h5 className="caption-header-text">NEW TRANDING</h5>
                        <h2 className="caption-title-text">Sofa Collection</h2>
                        <p className="caption-des">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.
                        </p>
                        <a href="/" className="carousel-btn">Shop Now</a>
                    </div>
                </div>
                <div className='item' style={{backgroundImage: `url(${Bannar3})`}}>
                    <div className="carousel-content">
                        <h5 className="caption-header-text">Taking your Viewing Experience to Next Level</h5>
                        <h2 className="caption-title-text">Sofa Collection</h2>
                        <p className="caption-des">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.
                        </p>
                        <a href="/" className="carousel-btn">Shop Now</a>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
}

export default LandingCarousel;