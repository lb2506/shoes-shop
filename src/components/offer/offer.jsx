import React, { useEffect, useRef, useState } from "react";
import "./offer.scss"

const Offer = (props) => {
    const offerRef = useRef(null);
    const [isOfferVisible, setIsOfferVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setIsOfferVisible(true);
            }
        }, {
            threshold: 0.25
        });
        if (offerRef.current) {
            observer.observe(offerRef.current);
        }

    }, []);

    return (
        <div className="offer">
            <div ref={offerRef} className={`offer__image ${isOfferVisible ? (props.offerWithButton === props.offerNumber ? 'slideToLeft' : 'slideToRight') : ''}`}>
                <img src={props.image} alt="offer" />
            </div>
            <div ref={offerRef} className={`offer__content ${isOfferVisible ? (props.offerWithButton === props.offerNumber ? 'slideToRight' : 'slideToLeft') : ''}`}>
                <h2>{props.title}</h2>
                <div className="offer__content-text">
                    <p>{props.text1}</p>
                    <p>{props.text2}</p>
                </div>
                {props.offerWithButton && props.offerWithButton === props.offerNumber &&
                    <button>About Us</button>
                }
            </div>
        </div>
    )
}

export default Offer;