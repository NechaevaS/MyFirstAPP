import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


import Stores from "./Stores/Stores";
import Home from "./Home/Home";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                {/* <Route exact path="/:id" render={props => <Home {...props} /> } /> */}
                    <Route path="/" exact component={Home} />
                    <Route path="/Stores" component={Stores} />
                    {/* <Route exact path="/Stores" render={props => <Home {...props} /> } /> */}

                </Switch>
                </div>

        )
    }
}

