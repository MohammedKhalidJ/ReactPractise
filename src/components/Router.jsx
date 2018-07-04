import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Content from './contentComponents/Content';
import Home from './contentComponents/Home';

class Router extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/content' component={Content}></Route>
                </Switch>
            </React.Fragment>
        );
    }
}

export default Router;