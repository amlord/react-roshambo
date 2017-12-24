import React, { Component } from 'react';

import './Computer.css';
import { Translate } from '../helpers/Constants';

class Computer extends Component {
  render() {
    return (
      <section className="Computer">
        <header>
          <header>
            <h1>Computer</h1>
          </header>
          <div className="chosenShape">
            <h2>{Translate.choice(this.props.chosen)}</h2>
          </div>
        </header>
      </section>
    );
  }
}

export default Computer;
