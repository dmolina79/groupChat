import React, { Component } from 'react';


class Landing extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 id="welcome">
            <img alt="img" src="img/img2.jpg" id="img1" />
            Welcome to a Group Chat
          </h1>
          <h1 className="animated fadeInDown" id="welcome2">
            GroupChat brings all the pieces and people you need together so you can actually get
            things done.
            <img alt="img" src="img/img3.jpg" id="img3" />
          </h1>
        </div>
      </div>
    );
  }
}
export default Landing;
