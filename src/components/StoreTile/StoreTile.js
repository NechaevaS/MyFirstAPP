import React, { Component } from 'react';
import './StoreTile.css'

class StoreTile extends Component {

    render() {
        return (
            <div className="StoreTile">
                <div>
                <img src={require('./images/' + this.props.img + ".png")} width="42" height="42" />

                <text>
                    {this.props.name}
                </text>
                </div>

            </div>
        );
    }
}

export default StoreTile;