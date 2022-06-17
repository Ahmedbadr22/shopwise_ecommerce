import "./main-product-card-style.css";
import productImage from "../../../images/furniture_img8.jpg";
import { useState } from "react";
import {Button} from "@mui/material";

const MainProductCard = () => {

    const [isFavProduct, setIsFavProduct] = useState(false);

    const handleFavSelection = () => setIsFavProduct(!isFavProduct);

    return(
        <div className="product-card shadow-sm mt-1 mb-1">
            <div className="product-header">
                <div className="sale-off rounded-pill">56% off</div>
                <div className="favorit-icon" onClick={handleFavSelection}>
                    {   
                        isFavProduct ?  
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="selected-fav-product bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                        :
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                    }
                </div>
            </div>
            <a href="/" className="d-flex justify-content-center">
                <img className="product-img" src={productImage} alt="headphone"/>
            </a>
            <h3 className="product-name">Itaque Earum Rerum</h3>
            <div className="bottom-section">
                <div className="price">
                    <span className="price-text">$112.00</span>
                    <span className="deleted-price">
                        <del>$150.00</del>
                    </span>
                </div>
                <Button
                    variant="outlined"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" fill="currentColor"
                         className="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                    </svg>
                </Button>
            </div>
        </div>
    );
};

export default MainProductCard;