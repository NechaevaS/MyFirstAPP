import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import "./Stores.css"

import StoreTile from './../components/StoreTile/StoreTile'

class Stores extends Component {
    render() {
        const { stores } = this.props.location.state
        return (


           <div className="Stores">
               <StoreTile name="Costco" id="0" img='costco' />
               <StoreTile name="Walmart" id="1" img='walmart' />
               <StoreTile name="Home Depot" id="2" img='homeDepot' />
               <StoreTile name="costco" id="3" img='costco' />
               <StoreTile name="costco" id="4" img='costco' />
               <StoreTile name="costco" id="5" img='costco' />
               <StoreTile name="costco" id="6" img='costco' />
               <StoreTile name="costco" id="7" img='costco' />
              

            </div>

        );
    }
}

export default Stores;