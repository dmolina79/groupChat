import React, { Component } from 'react';
import Moment from 'moment';
import Linkify from 'react-linkify';
import axios from 'axios';

const API_KEY = '26925b59f9fccdf9ef3324';

export default class Message extends Component {
  constructor(props) {
    super(props);

    const url = this.getUrl(this.props.message);

    this.state = {
      url,
      iFrame: <div />
    };

    this.getFrame(url);

    this.getIframelyHtml = this.getIframelyHtml.bind(this);
    this.formatTime = this.formatTime.bind(this);
    this.unfurl = this.unfurl.bind(this);
    this.getUrl = this.getUrl.bind(this);
    this.getFrame = this.getFrame.bind(this);
  }

  getFrame(url) {
    if (url === null) {
    } else {
      const ROOT_URL = `http://iframe.ly/api/iframely?url=${url}&api_key=${API_KEY}&iframe=true&omit_script=true`;
      const request = axios.get(ROOT_URL);
      request.then((response) => {
        this.setState({ iFrame: <div className='iframe pb-4' dangerouslySetInnerHTML={this.getIframelyHtml(response.data.html)} /> });
      });
      // {/*<a href="http://www.imdb.com/title/tt1631867/" data-iframely-url="//cdn.iframe.ly/6K4gSt"></a>*/}
    }
  }

  getUrl(text) {
    const urlRegex = /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi;
    const arrayUrl = urlRegex.exec(text);
    if (arrayUrl === null) {
      return null;
    }
    const firstUrl = arrayUrl.shift();

    return firstUrl;
  }

  getIframelyHtml(html) {
    return { __html: html };
  }

  unfurl() {
    return this.state.iFrame;
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
