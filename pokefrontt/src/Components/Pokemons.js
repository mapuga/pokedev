import React,{Component} from 'react';
import './card.css'
import axios from 'axios';

class Pokemons extends Component{

	constructor(props){
		super(props);
		this.state = {
			pokemon: {
				name: [],
				sprites: []
			}
		}
		
		console.log(this.getPokemons());
	}
	

	getPokemons(){
		let num = 5;
		for(let i = 0; i <= num.length; i++) {
			console.log(num[i]);		
		}
	}

	render(){
		return(
			<div>
				
			</div>
		);
	}
}

export default Pokemons;