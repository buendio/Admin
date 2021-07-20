import React from 'react';

const ModalSetting = () => {
    return (
        <div className="modal fade" id="settingJs"  aria-labelledby="settingJsLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header d-flex justify-content-between align-items-center">
                    Page settings
                    <button type="button" className="btn-close btn-close-white popup_close" aria-label="Close" data-bs-dismiss="modal"></button>
                 </div>
                <div className="modal-body p-0">
                    <ul className="nav nav-tabs w-100 d-flex justify-content-stretch" id="profileTab2">
                        <li className="nav-item flex-grow-1" role="presentation">
                            <button className="nav-link active" data-bs-toggle="tab"  data-bs-target="#mainTab">Main</button>
                        </li>
                        <li className="nav-item flex-grow-1" role="presentation">
                            <button className="nav-link rounded-0" data-bs-toggle="tab" data-bs-target="#Security">SEO</button>
                        </li>
                        <li className="nav-item flex-grow-1" role="presentation">
                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#Transactions">Actions</button>
                        </li>
                        <li className="nav-item flex-grow-1" role="presentation">
                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#Transactions">Additionally</button>
                        </li>
                    </ul>
                    <div id="profileContent2" className="tab-content">
                        <div className="tab-pane fade show active" role="tabpanel" id="mainTab">
                            <label className="d-block" htmlFor="createSite2">page title</label>
                            <input className="d-block w-100" type="text" id="createSite2" placeholder="example website" />
                            <span className="d-block">The name will be used in Netbooster'e</span>
                            <label className="d-block" htmlFor="createSite2">page title</label>
                            <input className="d-block w-100" type="text" id="createSite2" placeholder="example website" />
                            <span className="d-block">The name will be used in Netbooster'e</span>
                            <label className="d-block" htmlFor="createSite2">page title</label>
                            <input className="d-block w-100" type="text" id="createSite2" placeholder="example website" />
                            <span className="d-block">The name will be used in Netbooster'e</span>
                            <div className="d-flex align-items-center mb-2">
                                <img className="rounded-circle settingJs__img" src="img/chameleon-276603_1920 1.png" alt="" width="80" height="80" />
                                <button className="btn_small btn_color ">Replace</button>
                            </div>
                            <span>Lorem ipsum dolor sit amet.</span>
                            <div className="text-end">
                                <button className="btn btn_white popup_close" data-bs-dismiss="modal">Close</button>
                                <a href="catalog.html" className="btn btn_color">Create a page</a>
                            </div>
                        </div>
                        <div className="tab-pane fade" role="tabpanel" id="Security">
                              <div className="profile__succes active">
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <use xlinkHref="#succesSvg"/>
                                </svg>
                                Your password has been successfully changed
                              </div>
                              <form action="" className="profile__form profile__form_first active">
                                <label htmlFor="profilePassword">password</label>
                                <input type="text" id="profilePassword" placeholder="********" />
                                <div id="ChangePassword">Change Password</div>
                                <p>
                                    <span>two factor authentication</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nihil.
                                </p>
                                <button type="submit">Connect Google Authenticator</button>
                            </form>
                            <form action="" className="profile__form profile__form_password">
                                <div className="profile__formTitle">Security  `{'>'}` <span>Password change</span></div>
                                <div className="profile__danger active">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <use xlinkHref="#AtSvg"/>
                                    </svg>
                                    Old password is not correct
                                </div>
                                <label htmlFor="currentPassword">current password</label>
                                <input type="password" id="currentPassword" />
                                <label htmlFor="newPassword">new password</label>
                                <input type="password" id="newPassword" />
                                <label htmlFor="newPassword2">repeat new password</label>
                                <input type="password" id="newPassword2" />

                                <button className="w-100" type="submit">Change password</button>
                            </form>
                        </div>
                        <div className="tab-pane fade" role="tabpanel" id="Transactions">
                            <div className="table-responsive">
                                <table className="table table-borderless tranTable">
                                    <thead>
                                      <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Time</th>
                                        <th scope="col">Tariff</th>
                                        <th scope="col">Term</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Payment method</th>
                                        <th scope="col">PDF</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>2021-05-09</td>
                                        <td>17:19:41</td>
                                        <td>Basic</td>
                                        <td>1 month</td>
                                        <td>11 $</td>
                                        <td>PayPal</td>
                                        <td><a href="">Download PDF</a></td>
                                      </tr>
                                      <tr>
                                        <td>2011-05-11</td>
                                        <td>17:19:41</td>
                                        <td>Standart</td>
                                        <td>1 month</td>
                                        <td>111 $</td>
                                        <td>bank card</td>
                                        <td><a href="">Download PDF</a></td>
                                      </tr>

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
    );
};

export default ModalSetting;