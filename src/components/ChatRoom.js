import React, { Component } from 'react';

class ChatRoom extends Component {
    constructor(){
    	super();
    	this.state = {
    		messages:[
    		 {id:0, text: 'texto 1'},
    		 {id:1, text: 'texto 2'},
    		 {id:2, text: 'texto 3'},
    		 {id:3, text: 'texto 4'},
    		 ]
    	}
    }

	render() {
	  return (
	  	<ol>
		 {
		 	this.state.messages.map(message => {
		 		return <li key={message.id}>{message.text}</li>
		 	})
		 }

		</ol>
	  )
	}
}

export default ChatRoom;