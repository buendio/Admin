import React, {useState, useEffect, useContext } from 'react';
import NavSection from '../NavSection/NavSection';
import CatalogItem from '../CatalogItem/CatalogItem';
import Header from '../Header/Header';
import { useAuthContext } from '../../context/Auth'
import useCustom from '../customHook/useCustom ';
import { useQuery } from '@apollo/client'
import { GET_getProjects } from '../../graphql'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Main = (props: any) => {

    const [globalState, setGlobalState] = useCustom();
    // state post
    const [posts, setPosts] = useState([])
    //get posts
    const  { data } = useQuery(GET_getProjects);

    useEffect(() => {
        if (data) {
          setPosts(data.getProjects.projects)

        }

      })


    const [click, setClick] = useState(false);

    const openMenuFolder = () => {
        setClick(!click);
	}

    // Получаем пользователя из контекста
      // Получаем контекст
      const  {user}: any  = useAuthContext();

    if (!data) {
        return (
            <>
            <NavSection props={props}/>
            LOADING
            </>

        )

    }
        else {
            const colors = [ 'linear-gradient(90deg, #C471F5 0%, #FA71CD 100%)', 'linear-gradient(90deg, #F67555 0%, #DD3923 100%)', 'linear-gradient(90deg, #7B61FF 0%, #522CA2 100%)' ]

            document.querySelectorAll('.catalogItem__img').forEach(it => it.style.background = colors[Math.floor(Math.random() * (colors.length + 1))])

            let posts2 = [...posts]
            posts2.sort((a: any, b: any) => {
                if (+a.createdAt > +b.createdAt) return -1;
                if (+a.createdAt < +b.createdAt) return 1;
                return 0;
            })
            return (
                <div className="anime">
                    <Header/>
                    <NavSection props={props}/>
                    <section className="main">
                        <div className="container">
                            {/* <h2 className="mainTitle">folders<span></span></h2> */}
                            {/* <div className="row m-0 justify-content-between">
                                <div  className="folderItem col-md-4 d-inline-flex align-items-center">
                                    <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <use xlinkHref="#folderSvg"/>
                                    </svg>

                                    <h3 className="folderItem__title">Netbooster project <span>2 sites</span></h3>
                                    <div className="dropdownBox  ms-auto me-0">
                                        <div className="setingBtn"  onClick={openMenuFolder}>
                                            <span></span>
                                        </div>

                                        <ul className={click ? "dropdownList active" : "dropdownList"} aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdownItem" href="#">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <use xlinkHref="#penSvg"/>
                                                </svg>
                                                Rename
                                                </a>
                                            </li>
                                            <li><a className="dropdownItem color_red" href="#">
                                            <svg width="10" height="11" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <use xlinkHref="#cartSvg"/>
                                                </svg>
                                                Delete
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div> */}
                            <h2 className="mainTitle">{posts.length} sites<span></span></h2>
                            <div className="row mMin ">
                            {globalState.isTrue && posts2.map((e: any) => <CatalogItem key={e.id} id={e.id} name={e.name} price={e.price}/>)}
                            {!globalState.isTrue && posts.map((e: any) => <CatalogItem key={e.id} id={e.id} name={e.name} price={e.price}/>)}
                            </div>
                        </div>
                    </section>
                </div>
            );
        }



};

export default Main;