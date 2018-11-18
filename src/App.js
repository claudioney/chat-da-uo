import React, {Component} from 'react';

import ChatRoom from './components/ChatRoom';

import { Link } from 'react-router-dom'

class App extends Component{
 render(){
 	document.title = 'Olá cordova'
    return(
	  	<div>
	  	    <h3>Escolha uma das opções</h3>
              <br/>
              <Link to="/sala">Ir para a página de chat</Link>
              <br/>
              <Link to="/sobre">Ir para a página sobre</Link>
		</div>
    )
 }
}

export default App;