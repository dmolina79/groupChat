
import React, { Component } from 'react';


class Chatter extends Component {
  constructor(props, context) {
    super(props, context);
    //bind my methods
    this.updateMessage = this.updateMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);

  //init state
    this.state = {
      messages: ['hola pamela']

    };
  }

  updateMessage(event) {
  console.log('updateMessage:' + event.target.value);
  this.setState({
    message: event.target.value
  });
  }
  submitMessage(event) {
  console.log('submitMessage: ' + this.state.message);
  const nextMessage = {
    id: this.state.messages.length,
    text: this.state.message
  };


  const list = Object.assign([], this.state.messages);
  list.push(nextMessage);
  this.setState({
    messages: list
  });
  }

  render() {
      const currentMessage = this.state.messages.map((message, i) => {

      return (

        <p key={message.id}>{message.text}</p>
      );
    });
    return (
      <div>

      <div className="Jumbotron">
      <p>{currentMessage}</p>
      </div>
      <input onChange={this.updateMessage} type="text" placeholder="Message" />
      <button onClick={this.submitMessage}>Submit Message</button>

      </div>


    );
  }
  }

export default Chatter;
