import React, { useEffect, useState } from "react";
import "./home.scss"
import Offer from "../../components/offer/offer";
import TopProducts from "../../components/top-product/top-product";
import announces from "../../data/announces.json"
import offers from "../../data/offers.json"
import products from "../../data/topProducts.json"
import { NavLink } from "react-router-dom";
import Footer from "../../components/footer/footer";
import ProgressBar from "../../components/progressBar/progressBar";

const Home = () => {
    const [windowHeight, setWindowHeight] = useState(document.body.scrollHeight)
    const [color, setColor] = useState({ red: 55, green: 68, blue: 126 })
    const [isDetailVisible, setIsDetailVisible] = useState(false);
    const [isPourchaseVisible, setIsPourchaseVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null)

    useEffect(() => {
        const updateHeight = () => {
            setWindowHeight(document.body.scrollHeight);
        }
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => {
            window.removeEventListener('resize', updateHeight);
        }
    }, [])

    useEffect(() => {
        const detailElement = document.querySelector(".home__detail");
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setIsDetailVisible(true);
            }
        }, {
            threshold: 0.5
        });
        observer.observe(detailElement);
    }, []);

    useEffect(() => {
        const pourchaseElement = document.querySelector(".home__pourchase-content");
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setIsPourchaseVisible(true);
            }
        }, {
            threshold: 0.25
        });
        observer.observe(pourchaseElement);
    }, []);


    const handleClick = () => {
        setColor(prevColor => ({
            ...prevColor,
            red: Math.floor(Math.random() * 255),
            green: Math.floor(Math.random() * 255),
            blue: Math.floor(Math.random() * 255)
        }));
    }
    return (
        <>
            <ProgressBar windowHeight={windowHeight} handleClick={handleClick} color={color} />
            <div className="home">
                <div className="home__presentation">

                    <div className="home__presentation-content">
                        <div className="content__title">
                            <h2>Introduce Your Product</h2>
                            <h2>Quickly & Effectively</h2>
                        </div>
                        <div className="content__text">
                            <p>Chaque célébration mémorable commence par une planification impeccable. Dans le moindre détail, de la première ébauche de vos idées jusqu'à l'instant où les lumières s'éteignent, nous sommes à vos côtés. </p>
                            <p>Découvrez comment, grâce à notre expertise et notre passion, nous donnons vie à vos événements, en transformant vos visions en réalités inoubliables.</p>
                        </div>
                        <div className="content__buttons">
                            <button className="content__buttons-1">Button 1</button>
                            <button className="content__buttons-2">Button 2</button>
                        </div>
                    </div>
                </div>
                <div className={`home__detail ${isDetailVisible ? 'fadeIn' : ''}`}>
                    <div className="home__detail-content">
                        <h2>Light, Fast & Powerful</h2>
                        <div className="content__text">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                            <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                        </div>
                    </div>
                    <div className="home__detail-announces">
                        {announces && announces.map((announce, index) => {
                            return (
                                <div key={index} className={`announces__${index}`}>
                                    <img src={announce.image} alt="announce" />
                                    <h3>{announce.title}</h3>
                                    <p>{announce.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="home__offers">
                    {offers && offers.map((offer, index) => {
                        return (
                            <Offer
                                key={index}
                                offerNumber={index + 1}
                                image={offer.image}
                                title={offer.title}
                                text1={offer.text1}
                                text2={offer.text2}
                                offerWithButton={2}
                            />
                        )
                    })}
                </div>
                <div className="home__pourchase">
                    <div className={`home__pourchase-content ${isPourchaseVisible ? 'fadeIn slideToTop' : ''}`}>
                        <h2 className="content__title">A Price To Suit Everyone</h2>
                        <p className="content__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                        <p className="content__price">$40</p>
                        <p className="content__subtitle">UI Design Kit</p>
                        <p className="content__catchPhrase">See, One price. Simple.</p>
                        <NavLink to="/contact" className="content__contactBtn">Contact Us</NavLink>
                    </div>
                </div>
                <div className="home__products">
                    {products && products.map((product, index) => {
                        return (
                            <TopProducts
                                key={index}
                                index={index}
                                product={product}
                                hoveredIndex={hoveredIndex}
                                setHoveredIndex={setHoveredIndex}
                            />
                        )
                    })}
                </div>
                <div className="home__products-more">
                    <NavLink to="/products">View more</NavLink>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home;