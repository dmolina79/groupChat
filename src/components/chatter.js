
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

      <div className="row current-chat-area">
               <div className="col-md-12">
                     <ul className="media-list">
                       <li className="media">
                           <div className="media-body">
                               <div className="media">
                                   <a className="pull-left">
                                      <img
                                      className="media-object img-circle "
                                      role="presentation"
                                      height="42" width="40"
                                      src="/img/profilepicture.jpg"
                                      />
                                   </a>
                                   <div className="media-body">
                                       {currentMessage}
                                       <br />
                                       <small
                                       className="text-muted"
                                       >
                                       Pamela Rivera | 15rd March at 5:00pm
                                       </small>
                                       <hr />
                                   </div>
                               </div>

                           </div>
                       </li>
                    </ul>
              </div>
          </div>

          <div className="row current-chat-footer">
            <div className="panel-footer">
                <div className="input-group">
                  <input onChange={this.updateMessage} type="text" className="form-control" />
                  <span className="input-group-btn">
              <button onClick={this.submitMessage} className="btn btn-default" type="button">
              Send</button>
                  </span>
                </div>
                </div>
            </div>

</div>

    );
  }
  }

export default Chatter;
