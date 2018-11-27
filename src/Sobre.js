import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Sobre extends Component{
 render(){
    return(
	<div>
		<nav>
		    <div class="nav-wrapper">
		      <div class="brand-logo">Sobre..</div>
				<ul id="nav-mobile" class="right hide-on-med-and-down">
		        <li><a href="/">Inicio</a></li>
		        <li><a href="/sala">Mural</a></li>
      		</ul>
		</div>
		</nav>
	  	 <br/>
	  	 <h2>Claudioney Loureiro</h2>
	  	 <br/>
	  	 <Link to="/">Pagina Inicial</Link>
	</div>
    )
 }
}

export default Sobre;