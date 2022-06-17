import NavHeader from "../components/nav-header/NavHeader";
import Navbar from "../components/navbar/Navbar";
import OurService from "../components/sections/our-service/OurService";
import LandingCarousel from "../components/sections/landing-carousel/LandingCarousel";
import ExclusiveProducts from "../components/sections/exclusive-products-section/ExclusiveProducts";
import SalesSection from "../components/sections/sales-section/SalesSection";
import TrendingItems from "../components/sections/trending-items-section/TrendingItems";
import Footer from "../components/footer/Footer";
import PartnersSlider from "../components/sections/partners-section/PartnersSlider";


const Home = ({linksRouts}) => {
    return(
        <>
            <NavHeader linksRouts={linksRouts} />
            <Navbar linksRouts={linksRouts}     />
            <LandingCarousel />
            <OurService />
            <ExclusiveProducts />
            <SalesSection />
            <TrendingItems />
            <PartnersSlider />
            <Footer />
        </>
    );
};

export default Home;