import { useState } from "react";

const CartContext = () => {
    const initialProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];

    const [products, setProducts] = useState(initialProducts);

    const handleAddToCart = (product) => {
        const productIndex = products.findIndex(p => p.id === product.id);

        let updatedProducts;
        if (productIndex !== -1) {
            updatedProducts = [...products];
            updatedProducts[productIndex].quantity += 1;
        } else {
            updatedProducts = [...products, { ...product, quantity: 1 }];
        }

        setProducts(updatedProducts);
        localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
    };

    const handleIncrement = (productId) => {
        const productIndex = products.findIndex(p => p.id === productId);
        if (productIndex !== -1) {
            const updatedProducts = [...products];
            updatedProducts[productIndex].quantity += 1;
            setProducts(updatedProducts);
            localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
        }
    };

    const handleDecrement = (productId) => {
        const productIndex = products.findIndex(p => p.id === productId);
        if (productIndex !== -1) {
            const updatedProducts = [...products];
            if (updatedProducts[productIndex].quantity > 1) {
                updatedProducts[productIndex].quantity -= 1;
            } else {
                updatedProducts.splice(productIndex, 1);
            }
            setProducts(updatedProducts);
            localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
        }
    };

    const handleRemoveFromCart = (productId) => {
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);
        localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
    };


    return { products, setProducts, handleAddToCart, handleIncrement, handleDecrement, handleRemoveFromCart };
};

export default CartContext;
