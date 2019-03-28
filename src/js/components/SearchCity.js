import React, { Component } from 'react';

class SearchCity extends Component {

    state = {
        value: '',
      };

      updateValue = event => {
        this.setState({ value: event.target.value });
      };
    
      checkIfSend = event => {
        if (event.key === 'Enter') {
          this.props.getCity(this.state.value);
        }
      };

      buttonClick = event => {
        this.props.getCity(this.state.value);
      }
      
      render() {

        return (
          <div className={`search-wrapper ${ this.props.visible === true ? 'toggle' : ''}`}>
            <div className="search-form-wrapper">
              <p className="p-header">Prognoza pogody dla:</p>
              <div className="search-form">
                <input
                  type="text"
                  placeholder="Wpisz nazwę miasta"
                  value={this.state.value}
                  onChange={this.updateValue}
                  onKeyPress={this.checkIfSend}
                />
                <button onClick={this.buttonClick}></button>
                </div>
            </div>
          </div>
        );
      };
};

export default SearchCity;