import React, { Component } from 'react';



class Chatter extends Component{
  render() {
    return (
      <div>

<form action="">
      <div className="panel panel-default" id="chatter">

        <div className="chatHeader">
        <h1 id="chatterName">Gamming</h1>
        </div>

        <div className="chatMessage"></div>
        <textarea id="menssge"></textarea>

        <div className="chatBottom">

        <input type="text" className="form-control" placeholder="Message" aria-describedby="sizing-addon1"  id="chatterName"/>
        </div>

        </div>
</form>

      </div>
    );
  }
}
export default Chatter;
