import React,{Component} from 'react';
import './card.css'
import axios from 'axios';

class Pokemon extends Component{

	constructor(props){
		super(props);
		this.state = {
			pokemon: []
		}
	}
	componentDidMount(){
		//Consumir el enpoint
		const URL = 'https://pokeapi.co/api/v2/pokemon/ditto/';
		axios.get(URL)
			.then((response) => {
				const data = response.data;
				const arr = data.map(pokemon => this.setState({ pokemon:pokemon}));
			}).catch((err) => {
				console.log(err);
			});
	}

	render(){
		return(
			<div>
				<div className="card fix-card">
					<img src='' className="card-img-top" alt="..." />
					<div className="card-body">
					<h5 className="card-title"></h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Pokemon;