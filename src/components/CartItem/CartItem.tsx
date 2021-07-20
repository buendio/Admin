import React from 'react';

const CartItem = () => {
    return (
        <div className="cartItem d-flex justify-content-between align-items-center">
            <h3 className="cartItem__title">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref="#PageSvg"/>
                </svg>
                Website:
                <span>Google +</span>
            </h3>
            <div className="cartItem__block d-flex align-items-center">
                <div className="cartItem__date text-end">
                    <span>Removed:</span>
                    22.05.2021 / 17:55:30
                </div>
                <button className="cartItem__btn">Restore</button>
            </div>
        </div>
    );
};

export default CartItem;