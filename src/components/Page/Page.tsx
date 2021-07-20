import React from 'react';

const Page = () => {
    return (
        <div className="main__item">
            <div className="row">
                <a href="" className="col-6 col-6 d-flex align-items-center">
                    <img className="main__img" src="/img/avatarSite2.png" alt="" width="60" height="60" />
                    <div className="main__info">
                        <h3>Home page</h3>
                        <span>Last Published: 20.05.21</span>
                    </div>
                </a>
                <div className="col-6 d-flex justify-content-end align-items-center">
                    <button className="settingLink" data-bs-toggle="modal" data-bs-target="#settingJs">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <use xlinkHref="#settingSvg"/>
                        </svg>
                        Settings
                    </button>
                    <a href="" className="settingLink">
                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <use xlinkHref="#eyeSvg"/>
                        </svg>
                        Look
                    </a>
                    <div className="setingBtn"></div>
                    <button></button>
                </div>
            </div>
        </div>
    );
};

export default Page;