import React, {Component} from 'react';

import ChatRoom from './components/ChatRoom';
import { Link } from 'react-router-dom'


class Sala extends Component{
 render(){
    return(
	  	<div>
	  	 <ChatRoom/>
	  	 <Link to="/">Pagina Inicial</Link>
		</div>
    )
 }
}

export default Sala;