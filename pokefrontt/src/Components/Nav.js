import React,{Component} from 'react';
import pokeball from './pokeball.png'
import Pokemons from './Pokemons'
class Nav extends Component{
	render(){
		return(
			<div>
				<nav>
					<div className="nav nav-tabs" id="nav-tab" role="tablist">				  
						<a className="nav-item nav-link"><img src={pokeball} width="30" height="30" className="d-inline-block align-top" alt="" /></a>
						<a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Inicio</a>
						<a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Mi Equipo</a>
					</div>
				</nav>
				<div className="tab-content" id="nav-tabContent">
					<div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
						<Pokemons />
					</div>
					<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"></div>
				</div>
			</div>
		);
	}
}

export default Nav;