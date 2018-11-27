import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom'


class App extends Component{
 render(){
 	document.title = 'Mural de recados'
    return(
    <div>
		<nav>
		    <div class="nav-wrapper">
		      <div class="brand-logo">Recados</div>
		    </div>
		</nav>
		<div class="collection">
	        <Link to="/sala" class="collection-item" >Ir para a página de chat</Link>
	        <Link to="/sobre" class="collection-item" >Ir para a página sobre</Link>
      	</div>
	</div>
    )
 }
}

export default App;