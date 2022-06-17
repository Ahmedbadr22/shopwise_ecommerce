import NavHeader from "../components/nav-header/NavHeader";
import Navbar from "../components/navbar/Navbar";
import SubscribeSection from "../components/sections/subscribe-section/SubscribeSection";
import Footer from "../components/footer/Footer";
import MainPageHeader from "../components/page-header/MainPageHeader";
import ContactUsSection from "../components/sections/conatact-us-section/ContactUsSection";

const ContactUs = ({linksRouts}) => {
    return (
        <>
            <NavHeader linksRouts={linksRouts}/>
            <Navbar linksRouts={linksRouts}/>
            <MainPageHeader sectionTitle={"Contact Us"} pageTitle={"Contact Us"} />
            <ContactUsSection />
            <SubscribeSection />
            <Footer />
        </>
    );
};

export default ContactUs;