import React, { Component } from 'react';

import firebase from '@firebase/app';
import '@firebase/database';

var config = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
  };
var fbase = firebase.initializeApp(config);


class ChatRoom extends Component {
    constructor(){
    	super();
    	this.state = {
    		message: '',
    		messages:[
    		 ]
    	}
    }

    updateMessage(e){
    	this.setState({message: e.target.value});
    }

    componentDidMount(){
    	fbase.database().ref('messages/').on('value', snap =>{
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
    	const newMessage = {
    		id: this.state.messages.length,
    		text: this.state.message,
    	}
		fbase.database().ref('messages/'+newMessage.id)
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
			  <input
			    type="text"
			    value={this.state.message}
			    onChange={this.updateMessage.bind(this)}
			  />
			  <button>enviar</button>
			</form>
		</div>
	  )
	}
}

export default ChatRoom;