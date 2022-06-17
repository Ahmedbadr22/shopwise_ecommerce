import NavHeader from "../components/nav-header/NavHeader";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import SubscribeSection from "../components/sections/subscribe-section/SubscribeSection";
import AccountPageHeader from "../components/page-header/AccountPageHeader";
import LoginForm from "../components/forms/login-form/LoginForm";

const SignIn = ({linksRouts}) => {

    return (
        <>
            <NavHeader linksRouts={linksRouts}/>
            <Navbar linksRouts={linksRouts} />
            <AccountPageHeader sectionTitle={"Sign In"} />
            <LoginForm />
            <SubscribeSection />
            <Footer />
        </>
    );
};

export default SignIn;