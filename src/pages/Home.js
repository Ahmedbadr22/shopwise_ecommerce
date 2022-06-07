import NavHeader from "../components/nav-header/NavHeader";
import Navbar from "../components/navbar/Navbar";
import ExclusiveProduct from "../components/sections/exclusive-products-section/ExclusiveProducts";
import LandingCarousel from "../components/sections/landing-carousel/LandingCarousel";
import OurService from "../components/sections/our-service/OurService";
import SalesSection from "../components/sections/sales-section/SalesSection";


const Home = () => {
    return(
        <>
            <NavHeader />
            <Navbar />
            <LandingCarousel />
            <OurService />
            <ExclusiveProduct />
            <SalesSection />
        </>
    );
};

export default Home;