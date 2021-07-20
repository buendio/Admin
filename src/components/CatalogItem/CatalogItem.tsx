import React from 'react';
import { Link, useHistory  } from 'react-router-dom';
import env from "react-dotenv";

const CatalogItem = (props: any) => {
      // Получаем объект истории
    const history = useHistory()

    const showPost = () => {
        history.push(`/site/${props.id}`)
    }

    return (
        <div className="catalogItem col-md-4 d-inline-flex flex-column justify-content-between">
            <div   className="catalogItem__link d-inline-flex flex-column justify-content-between h-100">

                <div className="catalogItem__img rounded-circle"></div>
                {/* <img src="img/QJQXf9Gxd0w1.png" alt="" className="catalogItem__img rounded-circle" /> */}
                <span className="catalogItem__subTitle"  onClick={showPost}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <use xlinkHref="#pencilSvg"/>
                    </svg>
                    Edit
                </span>
                <span className="catalogItem__title d-block" onClick={showPost}>{props.name}</span>
            </div>
            <a href="/" className="catalogItem__link2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref="#targetSvg"/>
                </svg>
                {props.price ? props.price:'Future link'}
            </a>
        </div>
    );
};

export default CatalogItem;