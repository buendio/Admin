import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import useCustom from '../customHook/useCustom ';
import { useAuthContext } from '../../context/Auth'


const Header = (props: any) => {
    const [globalState, setGlobalState] = useCustom();

    const { logout, openNotaInfo, click } = useAuthContext()


    return (
            <header>
                 <div className="container-fluid h-100">
                    <div className="row h-100">
                    <div className="col-md-6 d-flex align-items-center">
                        <Link to='/main' className="logo">
                            <img src="/img/logo.svg" alt="logo" width="115" height="15" />
                        </Link>
                        <Link to="/main" className="header__link">My Sites</Link>
                        <Link to='/tariffs' className="header__link">Tariffs</Link>

                    </div>
                        <div className="col-md-6 d-flex justify-content-end align-items-center">
                            {/* <button className="header__link header__link_help text-end">
                                Help
                            </button> */}
                            {/* <div className={ click ? "header__link header__nota text-end h-100 d-inline-flex align-items-center active" : "header__link header__nota text-end h-100 d-inline-flex align-items-center" }  onClick={openNotaInfo}>
                                <svg className="bellSvg1 bellSvg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" >
                                    <use xlinkHref="#bellSvg"/>
                                </svg>
                                <svg className="bellSvg2 bellSvg" width="20" height="22" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <use xlinkHref="#bellSvg2"/>
                                </svg>
                                <span className="active rounded-circle align-items-center justify-content-center">1</span>
                                <div className="notaInfo text-start">
                                    <div className="notaInfo__title d-flex align-items-center">
                                        <img className="rounded-circle" src="img/chameleon-276603_1920 1.png" alt="" width="30" height="30" />
                                        <p className="mb-0 ms-3">Lorem ipsum dolor sit. <span >3 days ago</span></p>
                                    </div>
                                    <div className="notaInfo__text">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, doloremque.
                                    </div>
                                    <div className="notaInfo__title d-flex align-items-center">
                                        <img className="rounded-circle" src="img/chameleon-276603_1920 1.png" alt="" width="30" height="30" />
                                        <p className="mb-0 ms-3">Lorem ipsum dolor sit. <span >3 days ago</span></p>
                                    </div>
                                    <div className="notaInfo__text">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, doloremque.
                                    </div>
                                </div>
                            </div> */}
                            <Link to='/profile' className="header__link header__link_grey text-end d-flex align-items-center">
                                <div className="header__linkImg d-inline-flex">
                                    <img className="m-auto" src="/img/avatar.svg" alt="" width="20" height="20" />
                                </div>
                                <span>{globalState.nameProfile}</span>
                            </Link>

                            <button onClick={logout}  className="header__link header__link_exit header__link__grey text-end" >
                                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <use xlinkHref="#exitSvg"/>
                                </svg>
                                Exit
                            </button>
                        </div>
                    </div>
                </div>
            </header>
    );
};

export default Header ;