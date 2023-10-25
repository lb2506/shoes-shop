import React, { useContext, useEffect, useState } from "react";
import './cart.scss'
import Footer from "../../components/footer/footer";
import { GlobalContext } from "../../contexts/globalContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {

    const { cart } = useContext(GlobalContext)

    const totalQuantity = cart && cart.products && cart.products.reduce((total, product) => total + product.quantity, 0);
    const totalPrice = cart && cart.products && cart.products.reduce((total, product) => total + product.quantity * product.price, 0);

    const [shippingCost, setShippingCost] = useState(5);
    const [finalTotal, setFinalTotal] = useState(totalPrice + shippingCost);

    const handleShippingChange = (event) => {
        const selectedShipping = event.target.value;
        const newShippingCost = selectedShipping === "standard" ? 5 : 13;
        setShippingCost(newShippingCost);
    };

    useEffect(() => {
        if (totalPrice >= 120) {
            setFinalTotal(totalPrice)
        } else {
            setFinalTotal(totalPrice + shippingCost);
        }
    }, [totalPrice, shippingCost]);

    return (
        <>
            <div className="cart">
                <div className="cart__container">
                    <div className="cart__container-left">
                        <h1 className="left__title">Pannier</h1>
                        {cart && cart.products && cart.products.length > 0 ?
                            cart && cart.products && cart.products.map((product, index) => {
                                return (
                                    <div key={index} className="left__item">

                                        <img className="left__item-picture" src="https://img.ltwebstatic.com/images3_pi/2021/07/08/1625726400685d9e532bc42d512b26555f1794e2e2.webp" alt="product" />

                                        <div className="left__item-infos">
                                            <h2 className="infos__title">{product.title}</h2>
                                            <p className="infos__description">{(product.description).substring(0, 150) + "..."}</p>
                                        </div>
                                        <div className="left__item-quantity">
                                            <button className="quantity__decrease" onClick={() => cart.handleDecrement(product.id)}>-</button>
                                            <p className="quantity__number">{product.quantity}</p>
                                            <button className="quantity__increase" onClick={() => cart.handleIncrement(product.id)}>+</button>
                                        </div>
                                        <p>${product.price * product.quantity}</p>
                                        <button className="left__item-delete" onClick={() => cart.handleRemoveFromCart(product.id)}><FontAwesomeIcon icon={faTrashAlt} style={{ color: "#111B47", fontSize: "20px" }} /></button>
                                    </div>
                                )
                            })
                            :
                            <p className="left__emptyCart">Votre pannier est vide</p>
                        }
                    </div>
                    <div className="cart__container-right">
                        {cart && cart.products && cart.products.length > 0 ?
                            <div style={{ position: "sticky", top: 80 }}>
                                <h2 className="right__title">Résumé</h2>

                                <div className="right__resume">
                                    <p>{totalQuantity} PRODUITS</p>
                                    <p>{totalPrice} €</p>
                                </div>
                                <div className="right__adress">
                                    <p className="right__adress-title">ADRESSE</p>
                                    <div>
                                        <p>134 rue de l'horloge</p>
                                        <p>75001 Paris</p>
                                    </div>
                                </div>
                                <div className="right__shipping">
                                    <p className="right__shipping-title">EXPÉDITION</p>
                                    {totalPrice && totalPrice >= 120 ?
                                        <p>OFFERTE !</p>
                                        :
                                        <select className="right__shipping-input" value={shippingCost === 5 ? "standard" : "express"} onChange={handleShippingChange}>
                                            <option value="standard">Standard - Colissimo 5€</option>
                                            <option value="express">Express - Chronopost 13€</option>
                                        </select>
                                    }
                                </div>
                                <div className="right__total">
                                    <p>PRIX TOTAL</p>
                                    <p>{finalTotal} €</p>
                                </div>
                                <button className="right__checkout">Paiement</button>
                            </div>
                            :
                            <div style={{ minHeight: 400 }} />
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart;