import React, { Component } from 'react';
import Chatter from './chatter';



class ChatRoom extends Component{
  render() {
    return (
      <div>
      <div className="panel panel-default" id="chatroom">
        <div className="panel-heading">
        <h1>Los Vatos Locos</h1>
        </div>
        <div className="panel-body">
          Channels
        </div>
      <div className="panel-channel">
      <ul class="list-group">
  <li class="list-group-item">Gaming</li>
  <li class="list-group-item">Poker</li>
  <li class="list-group-item">Programming</li>
  <li class="list-group-item">JavaScript</li>
  <li class="list-group-item">Movies</li>
</ul>

      </div>
      <div className="panel-body">
      participants
      </div>
    <div className="panel-channel">
    <ul class="list-group">
<li class="list-group-item">John</li>
<li class="list-group-item">Tim</li>
<li class="list-group-item">Charlie</li>
<li class="list-group-item">Tom</li>
</ul>

    </div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Direct Messages</h3>
        </div>
        <div className="panel-body">
          Panel content
        </div>
      </div>

      </div>
<Chatter />



      </div>
    );
  }
}
export default ChatRoom;
