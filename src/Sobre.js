import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Sobre extends Component{
 render(){
    return(
	  	<div>
	  	 Sobre o dev que fez essa tela:
	  	 <br/>
	  	 <h2>Claudioney Loureiro</h2>
	  	 <br/>
	  	 <Link to="/">Pagina Inicial</Link>
		</div>
    )
 }
}

export default Sobre;