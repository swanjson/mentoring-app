import React, { Component } from 'react';
import axios from 'axios';

export default class QueryComponent extends Component {

  getInitialState = () => {
    return {
      inputValue: null
    }
  }

  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }

  buttonClicked = () => {
    axios.get(`http://localhost:3000/Protection-Pieces?Model=${this.state.inputValue}`)
      .then(response => {
        alert(JSON.stringify(response, null, 1));
      });
  }

  render() {

    return (
      <div>
        <p>Query Component</p>
        <p>
          <input
            style={{'font-size': '16px'}}
            type="text"
            onChange={ this.updateInputValue }>
          </input>
        </p>
        <button onClick={this.buttonClicked}>
          <p style={{'font-size': '16px'}}>Click Here</p>
        </button>
      </div>
    );
  }
}