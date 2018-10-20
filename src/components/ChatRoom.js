import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class ChatRoom extends Component {
    constructor(){
    	super();
    	this.state = {
    		message: '',
    		messages:[
//    		 {id:0, text: 'texto 1'},
//    		 {id:1, text: 'texto 2'},
//    		 {id:2, text: 'texto 3'},
//    		 {id:3, text: 'texto 5'},
    		 ]
    	}
    }

    updateMessage(e){
    	//console.log(e.target.value);
    	this.setState({message: e.target.value});
    	//console.log(this.state.message);
    }

    componentDidMount(){
    	window.firebase.database().ref('messages/').on('value', snap =>{
    		const currentMessages = snap.val();
    		if(currentMessages !== null){
    			this.setState({
    				messages: currentMessages
    			});
    		}

    	});
    }

    hadndleSubmit(e){
    	e.preventDefault();
//    	const list = this.state.messages;
    	const newMessage = {
    		id: this.state.messages.length,
    		text: this.state.message,
    	}
//    	list.push(newMessage);
//    	this.setState({messages: list});
		window.firebase.database().ref('messages/'+newMessage.id)
			.set(newMessage);
    	this.setState({message: ''});
    }

	render() {

	  const {messages} = this.state;
	  const messagesList = messages.map(message => {
		 		return <li key={message.id}>{message.text}</li>
	  });

	  return (
	  	<div>
		  	<ol>
			 	{messagesList}
			</ol>

			<form onSubmit={this.hadndleSubmit.bind(this)}>
			  <TextField
			    type="text"
			    value={this.state.message}
			    onChange={this.updateMessage.bind(this)}
			  />
			  <Button>enviar</Button>
			</form>
		</div>
	  )
	}
}

export default ChatRoom;