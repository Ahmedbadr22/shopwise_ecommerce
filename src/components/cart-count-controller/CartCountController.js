import "./cart-count-controller-style.css";
import {useState} from "react";

const CartCountController = () => {
    let [productCount, setProductCount] = useState(1);

    const handleIncreaseProductCount = () => {
        setProductCount(++productCount);
    }

    const handleDecreaseProductCount = () => {
        productCount > 0 ? setProductCount(--productCount) : setProductCount(productCount);
    }

    return (
        <div className="cart-item-count-controller">
            <input type="button" className="inc-dec-btn" value="+" onClick={handleIncreaseProductCount}/>
            <span className="product-count-viewer">
                {productCount}
            </span>
            <input type="button" className="inc-dec-btn" value="-" onClick={handleDecreaseProductCount}/>
        </div>
    );
};

export default CartCountController;