import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignUp from './SignUp';

const Routes = () => {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={SignUp} />
                    <Route path='/signup' component={SignUp} />

                </Switch>
            </BrowserRouter>
        );
}

export default Routes;