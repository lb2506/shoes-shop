import React from "react";
import "./products.scss";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import productsData from "../../data/products.json"

const Products = () => {

    const animations = [
        'rotate-90-right', 'rotate-left',
        'matrix-one', 'matrix-two',
        'rotate-90-left', 'rotate-right',
    ];

    const getAnimationClass = (index) => {
        return animations[index % animations.length];
    }

    return (
        <>
            <div className="products">
                <div className="products__top">
                    <div className="products__top-left">
                        <div className="product-container">
                            <img className={`product-image ${getAnimationClass(0)}`} src="https://res.cloudinary.com/dslilw3b5/image/upload/v1698157836/vrac/Shoes/_80dde473-579f-4695-bd48-54e6076132ee_oilxkh.jpg" alt="product" />
                            <div className="product-overlay"></div>
                            <div className="product-title description"> Découvrez notre collection exclusive de chaussures, combinant confort et style pour vous accompagner dans toutes vos aventures quotidiennes.</div>
                        </div>
                    </div>
                    <div className="products__top-right">
                        <div className="products__top-right-row">
                            <Link className="product-link" to={`/products/details/${80}`}>
                                <div className="product-container">
                                    <img className={`product-image ${getAnimationClass(1)}`} src={productsData[0].mainImage} alt="product" />
                                    <div className="product-overlay"></div>
                                    <div className="product-title">{productsData[0].title}</div>
                                </div>
                            </Link>
                            <Link className="product-link" to={`/products/details/${80}`}>
                                <div className="product-container">
                                    <img className={`product-image ${getAnimationClass(2)}`} src={productsData[1].mainImage} alt="product" />
                                    <div className="product-overlay"></div>
                                    <div className="product-title">{productsData[1].title}</div>
                                </div>
                            </Link>
                        </div>
                        <div className="products__top-right-row">
                            <Link className="product-link" to={`/products/details/${80}`}>
                                <div className="product-container">
                                    <img className={`product-image ${getAnimationClass(3)}`} src={productsData[2].mainImage} alt="product" />
                                    <div className="product-overlay"></div>
                                    <div className="product-title">{productsData[2].title}</div>
                                </div>
                            </Link>
                            <Link className="product-link" to={`/products/details/${80}`}>
                                <div className="product-container">
                                    <img className={`product-image ${getAnimationClass(4)}`} src={productsData[3].mainImage} alt="product" />
                                    <div className="product-overlay"></div>
                                    <div className="product-title">{productsData[3].title}</div>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="products__grid">
                    {
                        productsData.slice(4).map((product, index) => (
                            <Link to={`/products/details/${product.id}`} key={product.id}>
                                <div className="products__grid-container">
                                    <img
                                        className={`container__image ${getAnimationClass(index)}`}
                                        src={product.mainImage}
                                        alt={product.title}
                                    />
                                    <div className="container__overlay"></div>
                                    <div className="container__title">{product.title}</div>
                                </div>
                            </Link>

                        ))
                    }
                </div>
            </div >
            <Footer />
        </>
    )
}

export default Products;
