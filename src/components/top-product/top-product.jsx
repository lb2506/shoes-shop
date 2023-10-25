import React, { useContext, useState } from "react";
import "./top-product.scss"
import { GlobalContext } from "../../contexts/globalContext";

const TopProducts = (props) => {

    const { cart } = useContext(GlobalContext)
    const [isClicked, setIsClicked] = useState(false);

    const isHovered = props.index === props.hoveredIndex;
    const opacity = (props.hoveredIndex !== null && !isHovered) ? 0.5 : 1;
    const scale = (props.hoveredIndex !== null && !isHovered) ? "90%" : "100%";

    return (
        <div
            className="product"
            onMouseEnter={() => props.setHoveredIndex(props.index)}
            onMouseLeave={() => props.setHoveredIndex(null)}
            style={{ opacity, transform: `scale(${scale})` }}
        >
            <div>
                <h2 className="product__title">{props.product.title}</h2>
                <p className="product__description">{props.product.description}</p>
                <p className="product__price">${props.product.price}</p>
            </div>
            <button
                onClick={() => {
                    cart.handleAddToCart(props.product);
                    setIsClicked(true);
                    setTimeout(() => setIsClicked(false), 100); 
                }}
                className={`product__addToCart ${isClicked ? 'clicked' : ''}`}
            >
                Add To Cart
            </button>

        </div>
    )
}

export default TopProducts;