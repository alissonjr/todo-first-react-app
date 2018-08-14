import React, { Component } from 'react';

class ConfirmButton extends Component {
  constructor (props) {
    super(props);
    this.state = {
        text: props.text,
        type: props.type
    };
  }
  render() {
    return (
       <button class={this.state.type}>{this.state.text}</button>
    )
  }
};

export default ConfirmButton;