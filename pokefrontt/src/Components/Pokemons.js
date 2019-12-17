import React,{Component} from 'react';
import Nav from './Nav';
import Pokemon from './Pokemon';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Pokemons extends Component{

	render(){
		return(
			<div className='container'>
				<Nav />
			</div>
		);
	}
}

export default Pokemons;