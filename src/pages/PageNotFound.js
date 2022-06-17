import NavHeader from "../components/nav-header/NavHeader";
import Navbar from "../components/navbar/Navbar";
import AccountPageHeader from "../components/page-header/AccountPageHeader";
import SubscribeSection from "../components/sections/subscribe-section/SubscribeSection";
import Footer from "../components/footer/Footer";
import PageNotFoundSection from "../components/page-not-found/PageNotFoundSection";

const PageNotFound = () => {
    return (
        <>
            <NavHeader />
            <Navbar />
            <AccountPageHeader sectionTitle={"Page Not Found"} />
            <PageNotFoundSection />
            <SubscribeSection />
            <Footer />
        </>
    );
};

export default PageNotFound;