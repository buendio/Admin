import React from 'react';
import useCustom from '../customHook/useCustom ';

const Template = (props: any) => {
    const [globalState, setGlobalState] = useCustom();
    return (
        <section className="catalog">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 bgEA">
                        <h2 className="text-center">Choosing a template</h2>
                        <div className="inputSearch ">
                            <input className="d-block w-100 bg-none" type="text" placeholder="search by topic" />
                        </div>
                        <h3 className="catalogBlock__title_decor d-flex align-items-center"><span></span> types</h3>
                        <div className="catalogBlock__filter">
                            <a href="">Best Templates</a>
                        </div>
                        <div className="catalogBlock__filter">
                            <a href="">All Templates</a>
                        </div>
                        <div className="catalogBlock__filter">
                            <input type="radio" name="radioPage" id="radioPage1" className="d-none" />
                            <label htmlFor="radioPage1">
                                One page
                            </label>
                        </div>
                        <div className="catalogBlock__filter">
                            <input type="radio" name="radioPage" id="radioPage2" className="d-none" />
                            <label htmlFor="radioPage2">
                                Multipage
                            </label>
                        </div>
                        <h3 className="catalogBlock__title_decor d-flex align-items-center"><span></span> categories</h3>
                        <details  className="catalogBlockDetails">
                            <summary>
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.90382 8.9713C0.874718 8.94227 0.851629 8.90779 0.835875 8.86982C0.820121 8.83186 0.812012 8.79116 0.812012 8.75005C0.812012 8.70895 0.820121 8.66825 0.835875 8.63028C0.851629 8.59231 0.874718 8.55783 0.90382 8.5288L4.43319 5.00005L0.90382 1.4713C0.874765 1.44225 0.851717 1.40775 0.835993 1.36979C0.820268 1.33183 0.812175 1.29114 0.812175 1.25005C0.812175 1.20896 0.820268 1.16827 0.835993 1.13031C0.851717 1.09235 0.874765 1.05786 0.90382 1.0288C0.932875 0.999747 0.967368 0.976699 1.00533 0.960975C1.04329 0.945251 1.08398 0.937158 1.12507 0.937158C1.16616 0.937158 1.20685 0.94525 1.24481 0.960975C1.28277 0.976699 1.31726 0.999747 1.34632 1.0288L5.09632 4.7788C5.12542 4.80783 5.14851 4.84232 5.16426 4.88028C5.18002 4.91825 5.18813 4.95895 5.18813 5.00005C5.18813 5.04116 5.18002 5.08186 5.16426 5.11982C5.14851 5.15779 5.12542 5.19227 5.09632 5.2213L1.34632 8.9713C1.31729 9.0004 1.28281 9.02349 1.24484 9.03925C1.20688 9.055 1.16617 9.06311 1.12507 9.06311C1.08397 9.06311 1.04326 9.055 1.0053 9.03925C0.967333 9.02349 0.932849 9.0004 0.90382 8.9713Z" fill="#F67555"/>
                                </svg>
                                Business
                            </summary>
                            <div className="details__content">
                                <div className="catalogBlock__filter">
                                    <a href="">The property</a>
                                </div>
                                <div className="catalogBlock__filter">
                                    <a href="">Furniture</a>
                                </div>
                                <div className="catalogBlock__filter">
                                    <a href="">Tourism</a>
                                </div>
                                <div className="catalogBlock__filter">
                                    <a href="">Alcogolizm</a>
                                </div>
                            </div>
                        </details>
                        <details  className="catalogBlockDetails">
                            <summary>
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.90382 8.9713C0.874718 8.94227 0.851629 8.90779 0.835875 8.86982C0.820121 8.83186 0.812012 8.79116 0.812012 8.75005C0.812012 8.70895 0.820121 8.66825 0.835875 8.63028C0.851629 8.59231 0.874718 8.55783 0.90382 8.5288L4.43319 5.00005L0.90382 1.4713C0.874765 1.44225 0.851717 1.40775 0.835993 1.36979C0.820268 1.33183 0.812175 1.29114 0.812175 1.25005C0.812175 1.20896 0.820268 1.16827 0.835993 1.13031C0.851717 1.09235 0.874765 1.05786 0.90382 1.0288C0.932875 0.999747 0.967368 0.976699 1.00533 0.960975C1.04329 0.945251 1.08398 0.937158 1.12507 0.937158C1.16616 0.937158 1.20685 0.94525 1.24481 0.960975C1.28277 0.976699 1.31726 0.999747 1.34632 1.0288L5.09632 4.7788C5.12542 4.80783 5.14851 4.84232 5.16426 4.88028C5.18002 4.91825 5.18813 4.95895 5.18813 5.00005C5.18813 5.04116 5.18002 5.08186 5.16426 5.11982C5.14851 5.15779 5.12542 5.19227 5.09632 5.2213L1.34632 8.9713C1.31729 9.0004 1.28281 9.02349 1.24484 9.03925C1.20688 9.055 1.16617 9.06311 1.12507 9.06311C1.08397 9.06311 1.04326 9.055 1.0053 9.03925C0.967333 9.02349 0.932849 9.0004 0.90382 8.9713Z" fill="#F67555"/>
                                </svg>
                                Blog
                            </summary>
                            <div className="details__content">
                                <div className="catalogBlock__filter">
                                    <a href="">The property</a>
                                </div>
                                <div className="catalogBlock__filter">
                                    <a href="">Furniture</a>
                                </div>
                                <div className="catalogBlock__filter">
                                    <a href="">Tourism</a>
                                </div>
                                <div className="catalogBlock__filter">
                                    <a href="">Alcogolizm</a>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className="col-10 bgE5" >
                        <h2 className="text-center">{globalState.name}</h2>
                        <div className="d-flex justify-content-between flex-wrap px-md-4">
                            <a href="" className="catalogBlock  mb-5 p-0">
                                <div className="catalogBlock__img">

                                </div>
                                <h3 className="catalogBlock__title text-center">Empty page</h3>
                            </a>
                            <div  className="catalogBlock catalogBlock_hover  mb-5 p-0">
                                <div className="catalogBlock__img">
                                    <a href="11" className="catalogBlock__link">
                                        <img  src="img/chameleon-276603_1920 1.png" alt="" />
                                    </a>
                                    <a href="22" className="catalogBlock__linkTemplate d-flex align-items-center justify-content-center"> Choose a template</a>
                                </div>
                                <h3 className="catalogBlock__title text-center">Construction company</h3>
                            </div>
                            <div  className="catalogBlock catalogBlock_hover  mb-5 p-0">
                                <div className="catalogBlock__img">
                                    <a href="11" className="catalogBlock__link">
                                        <img  src="img/QJQXf9Gxd0w1.png" alt="" />
                                    </a>
                                    <a href="22" className="catalogBlock__linkTemplate d-flex align-items-center justify-content-center"> Choose a template</a>
                                </div>
                                <h3 className="catalogBlock__title text-center">Construction company</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Template;