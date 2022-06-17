import React from 'react';
import NavHeader from "../components/nav-header/NavHeader";
import Navbar from "../components/navbar/Navbar";
import SubscribeSection from "../components/sections/subscribe-section/SubscribeSection";
import Footer from "../components/footer/Footer";
import MainPageHeader from "../components/page-header/MainPageHeader";
import WishlistSection from "../components/sections/wishlist-section/WishlistSection";

const Wishlist = ({linksRouts}) => {
    return (
        <>
            <NavHeader linksRouts={linksRouts}/>
            <Navbar linksRouts={linksRouts} />
            <MainPageHeader sectionTitle={"Wishlist"} pageTitle={"Wishlist"} />
            <WishlistSection />
            <SubscribeSection />
            <Footer />
        </>
    );
};

export default Wishlist;