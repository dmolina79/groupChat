import React, { Component } from 'react';

class Chatter extends Component {
constructor() {
  super();
  this.state = { name: 'will' };
}

render() {
    return (
      <div>
      <ol>
      <p>{this.state.name}</p>
      </ol>

      <input type="text" placeholder="Message" />
      <button>Submit Message</button>

</div>
    );
  }
}

export default Chatter;
//
//
// import React, { Component } from 'react';
//
// class Chatter extends Component {
//
//   constructor(props, context) {
//     super(props, context);
//     //bind my methods
//     this.updateMessage = this.updateMessage.bind(this);
//     this.submitMessage = this.submitMessage.bind(this);
// console.log('llamando al constructor');
// //init state
//     this.state = {
//       messages: ['hola pamela']
//
//     };
//   }
//
// componentWillMount() {
//   console.log('compenen will mount');
// }
//
//   componentDidMount() {
//     console.log('componentDidMount');
//     firebase.database().ref('messages/').on('value', (snapshot) => {
//       const currentMessages = snapshot.val();
//
//       if (currentMessages != null) {
//         this.setState({
//           messages: currentMessages
//         });
//       }
//     });
//   }
// updateMessage(event) {
//   console.log('updateMessage:' + event.target.value);
//   this.setState({
//     message: event.target.value
//   });
// }
// submitMessage(event) {
//   console.log('submitMessage: ' + this.state.message);
//   const nextMessage = {
//     id: this.state.messages.length,
//     text: this.state.message
//   };
//
//   // firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
//   const list = Object.assign([], this.state.messages);
//   list.push(nextMessage);
//   this.setState({
//     messages: list
//   });
// // }
// }
//
//   render() {
//     console.log('Render');
//     const currentMessage = this.state.messages.map((message, i) => {
//
//       return (
//
//         <p key={message.id}>{message.text}</p>
//       );
//     });
//     return (
//       <div>
//       <ol>
//         <li>{currentMessage}</li>
//       </ol>
//
//       <input onChange={this.updateMessage} type="text" placeholder="Message" />
//       <button onClick={this.submitMessage}>Submit Message</button>
//
// </div>
//     );
//   }
// }
//
// export default Chatter;
