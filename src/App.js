import PageNotFound from "./pages/PageNotFound";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProductDetails from "./pages/ProductDetails";
import ContactUs from "./pages/ContactUs";
import Wishlist from "./pages/Wishlist";

const links = {
    homePath: '/',
    notFoundPath: '/not-found',
    signInPath: '/sign-in',
    signUpPath: '/sign-up',
    productDetailPath: '/product-detail',
    contactUsPath: '/contact-us',
    wishlistPath: "/wishlist"
}

function App() {
  return (
    <Routes>
        <Route
            element={<Home linksRouts={links}/>}
            path={links.homePath}
           exact
        />
        <Route
            element={<PageNotFound linksRouts={links}/>}
            path={links.notFoundPath}
            exact
        />
        <Route
            element={<SignIn linksRouts={links}/>}
            path={links.signInPath}
           exact
        />
        <Route
            element={<SignUp linksRouts={links}/>}
            path={links.signUpPath}
            exact
        />
        <Route
            element={<ProductDetails linksRouts={links}/>}
            path={links.productDetailPath}
            exact
        />
        <Route
            element={<ContactUs linksRouts={links}/>}
            path={links.contactUsPath}
            exact
        />
        <Route
            element={<Wishlist linksRouts={links}/>}
            path={links.wishlistPath}
            exact
        />
    </Routes>
  );
}

export default App;
