import React, { useState, useContext } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../contexts/globalContext";

const Navbar = () => {
    const { cart } = useContext(GlobalContext)
    const [menuOpen, setMenuOpen] = useState(false);

    const totalQuantity = cart && cart.products && cart.products.reduce((total, product) => total + product.quantity, 0);


    const handleMenuToggle = () => {
        if (window.innerWidth <= 1024) {
            setMenuOpen(!menuOpen);
            document.body.style.overflow = !menuOpen ? 'hidden' : 'auto';
        }
    };

    return (
        <>
            <div className={`overlay ${menuOpen ? 'visible' : ''}`} onClick={handleMenuToggle} />
            <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
                <ul className="navbar__navigation">
                    <li className="navbar__navigation-item" onClick={handleMenuToggle}>
                        <NavLink to="/" exact="true" activeclassname="true">Accueil</NavLink>
                    </li>
                    <li className="navbar__navigation-item" onClick={handleMenuToggle}>
                        <NavLink to="/products" exact="true" activeclassname="true">Produits</NavLink>
                    </li>
                    <li className="navbar__navigation-item" onClick={handleMenuToggle}>
                        <NavLink to="/about" exact="true" activeclassname="true">À Propos</NavLink>
                    </li>
                    <li className="navbar__navigation-item" onClick={handleMenuToggle}>
                        <NavLink to="/contact" exact="true" activeclassname="true">Contact</NavLink>
                    </li>
                </ul>
                <div>
                    <h1 className="navbar__title">WonderWalk</h1>
                </div>
                <div className="navbar__buttons">
                    <div className="navbar__buttons-cart" onClick={handleMenuToggle}>
                        <NavLink to="/cart" exact="true">Pannier</NavLink>
                        <span className="cart__numbers">{totalQuantity}</span>
                    </div>
                    <div className="navbar__buttons-connexion" onClick={handleMenuToggle}>
                        <button>Connexion</button>
                    </div>
                </div>
            </nav>
            <div className="navbar__title mobile">
                <h1>WonderWalk</h1>
            </div>
            <div className="navbar__hamburger" onClick={handleMenuToggle}>
                <span className="navbar__hamburger-line" />
            </div>
        </>
    );
};

export default Navbar;
