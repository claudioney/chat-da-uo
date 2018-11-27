import React, { Component } from 'react';

import firebase from '@firebase/app';
import '@firebase/database';
import 'materialize-css/dist/css/materialize.min.css';

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
		 		return (
                    <div class="row">
                        <div class="col">
                            <div class="card blue-grey darken-1">
                                <div class="card-content white-text">
                                <span class="card-title">Card #{message.id.toString()}</span>
                                {message.text}
                                </div>
                            </div>
                        </div>
                  </div>)
	  });

	  return (
	  	<div>
            <nav>
                <div class="nav-wrapper">
                  <div class="brand-logo">Recados</div>
                </div>
            </nav>
		  	<ul className="collection with-header">
			 	{messagesList}
			</ul>

			<form onSubmit={this.hadndleSubmit.bind(this)}>
			  <input 
                id="icon_message"
			    type="text"
			    value={this.state.message}
			    onChange={this.updateMessage.bind(this)}
			  />
			  <button className="btn waves-effect waves-light">enviar</button>
			</form>
		</div>
	  )
	}
}

export default ChatRoom;