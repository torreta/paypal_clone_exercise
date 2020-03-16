import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ForgotPass from './ForgotPass';
import Dashboard from './Dashboard';

const Routes = () => {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={SignUp} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/forgotPass' component={ForgotPass} />
                    <Route path='/dashboard' component={Dashboard} />
                </Switch>
            </BrowserRouter>
        );
}

export default Routes;