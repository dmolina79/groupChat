import React, { Component } from 'react';
import Moment from 'moment';

export default class Message extends Component {
  constructor(props) {
    super(props);

    this.formatTime = this.formatTime.bind(this);
  }

  formatTime() {
    return Moment(this.props.time).calendar();
  }

  render() {
    return (
      <div>
        <span className='message-color h5'><strong>{this.props.username}</strong></span>
        <span className='text-muted h6 pl-1'><small>{this.formatTime()}</small></span>
        <p className='message-color'>{this.props.message}</p>
      </div>
    );
  }
}
