import React from "react";
import "./productDetails.scss"
import Footer from "../../components/footer/footer";

const ProductDetails = () => {
    return (
        <>
            <div className="productDetails">
                <div className="productDetails__left">
                    <img className="productDetails__left-mainImage" src="https://res.cloudinary.com/dslilw3b5/image/upload/v1698156778/vrac/Shoes/_9636acac-0146-4397-a6a5-e5d51173d451_ktns78.jpg" alt="product" />
                    <div className="productDetails__left-variations">
                        <p className="variations__title">Autres variantes</p>
                        <div className="variations__images">
                            <img src="https://res.cloudinary.com/dslilw3b5/image/upload/v1698156778/vrac/Shoes/_9636acac-0146-4397-a6a5-e5d51173d451_ktns78.jpg" alt="product" />
                            <img src="https://res.cloudinary.com/dslilw3b5/image/upload/v1698156778/vrac/Shoes/_9636acac-0146-4397-a6a5-e5d51173d451_ktns78.jpg" alt="product" />
                            <img src="https://res.cloudinary.com/dslilw3b5/image/upload/v1698156778/vrac/Shoes/_9636acac-0146-4397-a6a5-e5d51173d451_ktns78.jpg" alt="product" />
                        </div>

                    </div>
                </div>
                <div className="productDetails__right">
                    <p className="productDetails__right-tags">men / lifestyle / chillout / low top</p>
                    <h1 className="productDetails__right-title">Dralax</h1>
                    <p className="productDetails__right-price">75 €</p>
                    <p className="productDetails__right-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.</p>
                    <div className="productDetails__right-options">
                        <p className="options__size">Taille</p>
                        <select className="options__values" defaultValue="-">
                            <option disabled value="-">Sélectionnez</option>
                            <option value="38">38</option>
                            <option value="39">39</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">42</option>
                            <option value="43">43</option>
                            <option value="44">44</option>
                        </select>
                        <p className="options__color">Couleur</p>
                        <select className="options__values" defaultValue="-">
                            <option disabled value="-">Sélectionnez</option>
                            <option value="Rouge">Rouge</option>
                            <option value="Ocre">Ocre</option>
                            <option value="Vert">Vert</option>
                            <option value="Bleu">Bleu</option>
                        </select>
                    </div>
                    <div className="productDetails__right-buttons">
                        <button className="buttons__addToCart">Ajouter au panier</button>
                        <button className="buttons__addToWishList">Liste d'envies</button>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default ProductDetails