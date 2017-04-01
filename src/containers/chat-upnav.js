import React, { Component } from 'react';


export default class ChatUpNav extends Component {
  renderDay() {
      return new Date();
  }


  render() {
    return (
      <div className="Upnav">
      <h1>{this.renderDay}</h1>

      </div>
    );
  }
}
