import React, { Component } from 'react';



class Chatter extends Component{
  render() {
    return (
      <div>


      <div className="panel panel-default" id="chatter">

        <div className="chatHeader">
        <h1 id="chatterName">Gamming</h1>
        </div>

        <div className="chatMessage"></div>

        <div className="chatBottom">
        <input type="text" className="form-control" placeholder="Message" aria-describedby="sizing-addon1"  id="chatterName"/>
        </div>

        </div>


      </div>
    );
  }
}
export default Chatter;
