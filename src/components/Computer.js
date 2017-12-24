import React, { Component } from 'react';

import './Computer.css';
import { Translate } from '../helpers/Constants';

class Computer extends Component {
  render() {
    const chosen = Translate.choice(this.props.chosen);
    
    return (
      <section className="Computer">
        <header>
          <header>
            <h1 className="Computer__title">Computer</h1>
          </header>
          <div className="Computer__choice">
            <h2 className={"Computer__ChosenShape" + ((chosen) ? " Computer__ChosenShape--" + chosen.toLowerCase() : "")}>{chosen}</h2>
          </div>
        </header>
      </section>
    );
  }
}

export default Computer;
