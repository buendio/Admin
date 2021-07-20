import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ModalSite from '../Modal/ModalSite';
import ModalFolder from '../Modal/ModalFolder';
import useCustom from '../customHook/useCustom ';

const NavSection = (props: any) => {
    const [globalState, setGlobalState] = useCustom();
    const [show, setShow] = useState(false);
    const sortNew = () => {
        const newIsTrue = !globalState.isTrue
        setGlobalState({isTrue : newIsTrue});
    }
    const handleShow = (e: any) => {
        e.preventDefault();
        const newValue = true
        setGlobalState({isSiteModalOpen : newValue});

    }

    return (
        <div>
            <section className="navSection">
                <div className="container d-flex align-items-center">
                    <button className="btn btn_color " data-bs-toggle="modal" data-bs-target="#creatPageJs"  onClick={handleShow}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <use xlinkHref="#plusSvg"/>
                        </svg>
                        Create a new site
                    </button>
                    {/* <button className="btn btn_transparent" data-bs-toggle="modal" data-bs-target="#creatFolderJs">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <use xlinkHref="#plusSvg"/>
                        </svg>
                        Create a folder
                    </button> */}
                    <Link to='/cart' className="navSection__cart">
                        <svg className="me-2" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <use xlinkHref="#cartSvg"/>
                        </svg>
                        Cart (111)
                    </Link>
                    <div className="sortFilter  ms-auto me-0">
                        <span className="me-2">Sort:</span>
                        <button onClick={sortNew}>New first
                            <svg className={globalState.isTrue ? "active" : ""} width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <use xlinkHref="#caretDownSvg"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
            <ModalSite />
            <ModalFolder />
        </div>
    );
};

export default NavSection;