import React from 'react';
import useCustom from '../customHook/useCustom ';
import Header from '../Header/Header';
const Profile = () => {
    const [globalState, setGlobalState] = useCustom();
    const addSite = (e: any) => {
        let input = document.getElementById("profileName") as HTMLInputElement
        if (input.value) {
            const newInputValue = input.value
            setGlobalState({nameProfile : newInputValue});
        }
    }
    return (
    <div className="anime">
    <Header />
    <section className="innerPage">
        <div className="container">
            <h2 className="innerPage__title">Profile</h2>
            <div className="">
                <ul className="nav nav-tabs w-100 d-flex justify-content-stretch" id="profileTab">
                    <li className="nav-item flex-grow-1" role="presentation">
                        <button className="nav-link active" data-bs-toggle="tab"  data-bs-target="#PersonalData">Personal data</button>
                    </li>
                    <li className="nav-item flex-grow-1" role="presentation">
                        <button className="nav-link rounded-0" data-bs-toggle="tab" data-bs-target="#Security">Security</button>
                    </li>
                    <li className="nav-item flex-grow-1" role="presentation">
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#Transactions">Transactions</button>
                    </li>
                </ul>
                <div id="profileContent" className="tab-content">
                    <div className="tab-pane fade show active" role="tabpanel" id="PersonalData">
                        <div className="profile__img m-auto">

                            <input type="file" id="input__file" multiple />
                            <label htmlFor="input__file" className="w-100 h-100">
                                {/* <img className=" rounded-circle" src="img/photo_2020-05-24_00-25-17 1.png" alt="" width="120" height="120" /> */}
                            </label>

                        </div>
                        <form action="" className="profile__form">
                            <label htmlFor="profileName">name</label>
                            <input type="text" id="profileName" placeholder={globalState.nameProfile} onChange={addSite} />
                            <label htmlFor="profileMail">E-mail</label>
                            <input type="email" id="profileMail" placeholder="dkozyr0k@gmail.com" />
                            {/* <select className="form-select " aria-label=".form-select-sm example">
                                <option selected>Русский</option>
                                <option selected>English</option>
                                <option selected>Español</option>
                            </select> */}
                            <button className="w-100" type="submit">Save changes</button>
                        </form>
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
                            <button className="w-100" type="submit">Connect Google Authenticator</button>
                        </form>
                        <form action="" className="profile__form profile__form_password">
                            <div className="profile__formTitle">Security &gt <span>Password change</span></div>
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
    </section>
    </div>
    );
};

export default Profile;