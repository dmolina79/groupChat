import React, { Component } from 'react';



class FindGroupChat extends Component{
  render() {
    return (
      <div>
      			<form>
      			<div id="GroupChat">
      			<h1>Find your GroupChat</h1>
      			</div>
      				<fieldset className="form-group">
      					<input id="GroupChat1" className="form-control" placeholder="Enter your GroupChat" />
      					<button action="submit" className="btn btn-primary" id="btn">
      					Find Group
      					</button>
      				</fieldset>
      				</form>
      </div>
    );
  }
}
export default FindGroupChat;
