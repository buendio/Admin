import React from 'react';
import CartItem from '../CartItem/CartItem';
import Header from '../Header/Header';
const Cart = () => {
    return (
        <div className="anime">
            <Header/>
            <section className="cartTop">
                <div className="container">
                    Basket
                </div>
            </section>
            <section className="main">
                <div className="container">
                    <div className="cartInfo">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <use xlinkHref="#AtSvg"/>
                        </svg>
                        Elements in the cart are stored for <span>7 days</span>, after which they are deleted permanently
                    </div>
                    <CartItem />
                    <div className="cartItem d-flex justify-content-between align-items-center">
                        <h3 className="cartItem__title">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <use xlinkHref="#PageSvg"/>
                            </svg>
                            Website:
                            <span>Facebook ebaniy</span>
                        </h3>
                        <div className="cartItem__block d-flex align-items-center">
                            <div className="cartItem__date text-end">
                                <span>Removed:</span>
                                22.05.2021 / 17:55:30
                            </div>
                            <button className="cartItem__btn">Restore</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;