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
	        <a href="/sala" class="collection-item">Ir para a página de chat</a>
	        <a href="/sobre" class="collection-item">Ir para a página sobre</a>
      	</div>
	</div>
    )
 }
}

export default App;