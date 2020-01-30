import React, { Component } from 'react'
import Mdb from './Mdb';
import MarketPLaceForm from './MarketPLaceForm';
import MarketplaceComponent from './MarketplaceComponent';
/* import Tabs from './Tabs';

const styles = {
  fontFamily: 'sans-serif',
}; */

export default class MarketPLace extends Component {
  /* constructor(props) {
      super(props);
      this.state = {active: 'aTab'};
    } */
  render() {
    /* const content = {
      aTab: 'Tab A',
      bTab: 'Tab B',
      cTab: 'Tab C',
    }; */
    return (
      <div>
        <MarketPLaceForm />
        <MarketplaceComponent />
        <Mdb />
      </div>
    );
  }
}
