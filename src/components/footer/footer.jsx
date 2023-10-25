import React from "react";
import "./footer.scss"
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__top">
                <p>©2023 Yourcompany</p>
                <h1>Website</h1>
                <div className="footer__top-contactBtn">
                    <NavLink to="/contact">Contact Us</NavLink>
                </div>
            </div>
            <div className="footer__bottom">
                <ul className="footer__bottom-navbar">
                    <li className="navbar__item">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
                <div className="footer__bottom-social">
                    <a href="/"><img src="https://res.cloudinary.com/dslilw3b5/image/upload/v1695133939/vrac/landingPage/Instagram_Copy_4_iykvvs.png" alt="fb" /></a>
                    <a href="/"><img src="https://res.cloudinary.com/dslilw3b5/image/upload/v1695133938/vrac/landingPage/Instagram_Copy_3_vuf895.png" alt="linkedin" /></a>
                    <a href="/"><img src="https://res.cloudinary.com/dslilw3b5/image/upload/v1695133938/vrac/landingPage/Instagram_Copy_2_dqgdaz.png" alt="twitter" /></a>
                    <a href="/"><img src="https://res.cloudinary.com/dslilw3b5/image/upload/v1695133940/vrac/landingPage/Instagram_Copy_kk1wyc.png" alt="youtube" /></a>
                    <a href="/"><img src="https://res.cloudinary.com/dslilw3b5/image/upload/v1695133941/vrac/landingPage/Instagram_ckldop.png" alt="instagram" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;