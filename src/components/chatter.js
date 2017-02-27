import React, { Component } from 'react';



class Chatter extends Component{
  render() {
    return (
      <div>

      <form action="">
      <div id ="name_prompt">
        <p className="title">hola </p>

        <input type="text" id="name" className="form-control" />
        <button className="btn-btn-success">Submit</button>
        </div>
      </form>

      </div>
    );
  }
}
export default Chatter;
//
//
// <div className="panel panel-default" id="chatter">
//
//   <div className="chatHeader">
//   <h1 id="chatterName">Gamming</h1>
//   </div>
//
//   <div className="chatMessage"></div>
//   <textarea id="menssge"></textarea>
//
//   <div className="chatBottom">
//
//   <input type="text" className="form-control" placeholder="Message" aria-describedby="sizing-addon1"  id="chatterName"/>
//   </div>
//
//   </div>
