import React, { Component } from 'react';
import Moment from 'moment';
import Linkify from 'react-linkify';

export default class Message extends Component {
  constructor(props) {
    super(props);

    this.formatTime = this.formatTime.bind(this);
    this.unfurl = this.unfurl.bind(this);
    this.getIframelyHtml = this.getIframelyHtml.bind(this);
  }

  getIframelyHtml(html) {
    return { __html: html };
  }

  unfurl() {
    if (this.props.thumbnail === '') {
      return;
    } else {
      return <div className='pb-4' dangerouslySetInnerHTML={this.getIframelyHtml(this.props.thumbnail)} />;
    } 
  }

  formatTime() {
    return Moment(this.props.time).calendar();
  }

  render() {
    return (
      <div>
        <span className='message-color h5'><strong>{this.props.username}</strong></span>
        <span className='text-muted h6 pl-1'><small>{this.formatTime()}</small></span>
        <p className='message-color'><Linkify properties={{ target: '_blank', style: { color: 'blue', fontWeight: 'bold' } }}>{this.props.message}</Linkify></p>
        {this.unfurl()}
      </div>
    );
  }
}
