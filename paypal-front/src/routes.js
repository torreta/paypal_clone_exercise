import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ForgotPass from './ForgotPass';

const Routes = () => {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={SignUp} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/forgotPass' component={ForgotPass} />
                </Switch>
            </BrowserRouter>
        );
}

export default Routes;