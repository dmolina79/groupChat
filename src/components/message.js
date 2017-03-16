import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    return (
      <div>
        { this.props.username } : { this.props.message }
      </div>
    );
  }
}
