import NavHeader from "../components/nav-header/NavHeader";
import Navbar from "../components/navbar/Navbar";
import AccountPageHeader from "../components/page-header/AccountPageHeader";
import SubscribeSection from "../components/sections/subscribe-section/SubscribeSection";
import Footer from "../components/footer/Footer";
import SignUpForm from "../components/forms/signup-form/SignUpForm";

const SignUp = ({linksRouts}) => {
    return (
        <>
            <NavHeader linksRouts={linksRouts} />
            <Navbar linksRouts={linksRouts}  />
            <AccountPageHeader sectionTitle={"Sign Up"} />
            <SignUpForm />
            <SubscribeSection />
            <Footer />
        </>
    );
};

export default SignUp;