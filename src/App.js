import React, {Component} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';



import ChatRoom from './components/ChatRoom';

class App extends Component{
 render(){
    return(
	  	<div>
	  	<AppBar position='static' color='default'>
	  	   <Typography type='title' color='inherit'>
	  	 	  Adicione qualquer mensagem aqui
	  	   </Typography>
	  	 </AppBar>
	  	 <ChatRoom/>
		</div>
    )
 }
}

export default App;