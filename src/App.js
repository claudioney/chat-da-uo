import React, {Component} from 'react';

import ChatRoom from './components/ChatRoom';

class App extends Component{
 render(){
    return(
	  	<div>
	  	 	  Adicione qualquer mensagem aqui
	  	 <ChatRoom/>
		</div>
    )
 }
}

export default App;