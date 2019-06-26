import React, { Component } from 'react';
import axios from 'axios';
import './QueryComponent.css';

export default class QueryComponent extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: null,
      itemList: null
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
        //alert(JSON.stringify(response, null, 3));
        this.setState({ itemList: response.data })
      });
  }

  generateList = () => {
    return this.state.itemList.map(piece => {
      return (
        <div style={ { border: "20px solid green", padding: "0px" }}>
          <p>{ piece.Manufacturer } { piece.Model } { piece["Size/Name"] } { piece.Color }</p>
        </div>
      );
    });
  }

  render() {

    let itemListComponent = <span></span>;
    if (this.state.itemList) {
      itemListComponent = this.generateList();
    }

    return (
      <div>
        <p>Enter Model Number:</p>
        <p>
          <input
            style={{'font-size': '16px'}}
            type="text"
            onChange={ this.updateInputValue }>
          </input>
        </p>
        <button onClick={this.buttonClicked}>
          <p style={{'font-size': '16px'}}>Search </p>
        </button>
        <div>
          { itemListComponent }
        </div>
      </div>
    );
  }
}