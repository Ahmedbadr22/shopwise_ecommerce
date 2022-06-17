import NavHeader from "../components/nav-header/NavHeader";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import PageHeader from "../components/page-header/PageHeader";
import ProductViewer from "../components/product-viewer/ProductViewer";
import ProductReview from "../components/product-review-section/ProductReview";
import RelatedProductSlider from "../components/related-product/RelatedProductSlider";
import SubscribeSection from "../components/sections/subscribe-section/SubscribeSection";


const ProductDetails = ({linksRouts}) => {
    return (
        <>
            <NavHeader linksRouts={linksRouts} />
            <Navbar linksRouts={linksRouts}/>
            <PageHeader sectionTitle={"Product Detail"} />
            <ProductViewer />
            <ProductReview />
            <RelatedProductSlider />
            <SubscribeSection />
            <Footer/>
        </>
    );
};

export default ProductDetails;