import "./cart-button-style.css";

const CartButton = ({btnName= "Add To Cart"}) => {
    return (
        <button className="cart-button">
            {btnName}
        </button>
    );
};

export default CartButton;