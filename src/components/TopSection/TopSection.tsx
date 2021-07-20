import React from 'react';

const TopSection = () => {
    return (
            <section className="topSection">
                <div className="topSection__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2">
                                <img className="avatarSite rounded-circle" src="/img/avatarSite.png" alt="" width="120" height="120" />
                            </div>
                            <div className="col-md-10">
                                <h1>Chameleon on the finger</h1>
                                <div className="d-flex align-items-center">
                                    <a href="siteSetting.html" className="btn">
                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <use xlinkHref="#settingSvg"/>
                                        </svg>
                                        Site settings
                                    </a>
                                    <a href="">
                                        <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <use xlinkHref="#postAllSvg"/>
                                        </svg>
                                        Post all
                                    </a>
                                    <a href="">
                                        <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <use xlinkHref="#UnpublishSvg"/>
                                        </svg>
                                        Unpublish
                                    </a>
                                    <a className="header__link_blank me-0 ms-auto d-inline-flex align-items-center" href="" target="_blank">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                            <use xlinkHref="#NSvg"/>
                                        </svg>
                                        spasibo-chto-ne-na-penise.com
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <use xlinkHref="#targetSvg"/>
                                        </svg>

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container topSection__bottom">
                    <div className="row">
                        <div className="col-6">
                            <a href="" className="staticLink">
                                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <use xlinkHref="#statisticSvg"/>
                                </svg>
                                Statistics
                            </a>
                            <a href="" className="analiticLink">
                                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <use xlinkHref="#analiticSvg"/>
                                </svg>
                                Analytics
                            </a>
                        </div>
                        <a href="" className="col-6 text-end domainLink">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <use xlinkHref="#worldSvg"/>
                            </svg>
                            Connect domain
                        </a>
                    </div>
                </div>
            </section>
    );
};

export default TopSection;