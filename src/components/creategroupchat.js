import React, { Component } from 'react';



class CreateGroupChat extends Component{
  render() {
    return (
      <div>
      <form>
      <div id="GroupChat">
      <h1>Create your GroupChat</h1>
      </div>
        <fieldset className="form-group">
          <input id="GroupChat1" className="form-control" placeholder="Enter a new name" />
          <button action="submit" className="btn btn-primary" id="btn">
          Create Group
          </button>
        </fieldset>
        </form>
      </div>
    );
  }
}
export default CreateGroupChat;
