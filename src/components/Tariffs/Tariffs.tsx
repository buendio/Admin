import React from 'react';
import TariffItem from '../TariffItem/TariffItem';
import Header from '../Header/Header';
const Tariffs = () => {
    return (
        <div className="anime">
        <Header/>
        <section className="tariff w-100">
            <div className="container">
                <h2 className="tariffTitle text-center">Your tariff plan:</h2>
                <div className="tariffMain  m-auto col-md-8 text-center">
                    <img className="tariffMain__img m-auto rounded-circle" src="img/face1.png" alt="" width="80" height="80" />
                    <h3 className="tariffMain__title">Basic</h3>
                    <p className="tariffMain__text col-md-3 m-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt beatae magnam quasi!
                    </p>
                    <hr className="col-md-6" />
                    <p className="tariffMain__text col-md-5 m-auto">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, perferendis aliquam.
                    </p>
                </div>
                <h2 className="tariffTitle text-center">Tariff plans:</h2>
                <div className="col-md-12 d-flex flex-wrap m-auto">
                    <TariffItem />
                </div>
            </div>
        </section>
        </div>
    );
};

export default Tariffs;