import * as React from 'react';
import { BrowserRouter, Route,  Switch, Redirect, useLocation, useHistory} from 'react-router-dom';

import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Main from './components/Main/Main';
import Svg from './components/Svg/Svg';
import Tariffs from './components/Tariffs/Tariffs';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import Site from './components/Site/Site';
import ModalFolder from './components/Modal/ModalFolder';
import Template from './components/Template/Template';
import {Login} from './components/Login/Login';
import {Register} from './components/Register/Register';
import { AuthProvider } from './context/Auth'
import { AuthRoute } from './utils/authRoute'
import './fade.css';


const PageFade = (props: any) => (
  <CSSTransition
    {...props}
    classNames="fadeTranslate"
    timeout={1000}
    mountOnEnter={true}
    unmountOnExit={true}
  />
)


const App: React.FC = (props) => {
  let  history : any = useHistory();
  const location = useLocation()
  const locationKey = history.location.pathname


  console.log(location.pathname);
  console.log(location);

  return (
    <>
 {/* {transitions.map(({item, props, key}) => {
      <animated.div key={key} style={props}>
            <Switch location={item}>
            <Route path='/111' component={Tariffs} exact />
                </Switch>
      </animated.div>
    })} */}


    <AuthProvider>


                <Route path='/' component={Login} exact />
                <Route path='/register' component={Register} exact />
                <AuthRoute path='/main' component={Main} exact/>
                <AuthRoute path='/tariffs' component={Tariffs} exact/>
                <AuthRoute path='/cart' component={Cart} exact/>
                <AuthRoute path='/profile' component={Profile} exact/>
                <AuthRoute path='/template' component={Template} exact/>
                <AuthRoute path='/site/:id' component={Site} exact/>
                <ModalFolder />
                <Svg />

    </AuthProvider>


        </>
  );
}

export default App;
