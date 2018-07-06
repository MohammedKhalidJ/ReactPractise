import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './contentComponents/Home';
import AboutUs from './contentComponents/AboutUs';
import ContactUs from './contentComponents/ContactUs';

class Router extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/aboutUs' component={AboutUs}></Route>
                    <Route path='/contactUs' component={ContactUs}></Route>
                </Switch>
            </React.Fragment>
        );
    }
}

export default Router;