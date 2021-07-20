import React from 'react';

const TariffItem = () => {
    return (
        <div className="tariffItem text-center">
            <img className="tariffItem__img m-auto rounded-circle" src="img/face1.png" alt="" width="80" height="80" />
            <h3 className="tariffItem__title">Basic</h3>
            <ul className="tariffItem__list text-start">
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>2000 Mb</li>
            </ul>
            <p className="tariffItem__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, suscipit.
            </p>
            <div className="tariffItem__price">Free </div>
        </div>
    );
};

export default TariffItem;