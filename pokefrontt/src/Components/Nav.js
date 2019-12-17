import React,{Component} from 'react';

class Nav extends Component{
	render(){
		return(
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-1">
					<div className="collapse navbar-collapse">
					    <ul className="navbar-nav">
					    	<li className="nav-item">
					    		<img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png" width="30" height="30" />
					    	</li>
							<li className="nav-item active">
							<a className="nav-link">Inicio<span className="sr-only">(current)</span></a>
							</li>
							<li className="nav-item">
							<a className="nav-link">Mi Equipo</a>
							</li>
					    </ul>
				  	</div>
			  	</nav>
			</div>
		);
	}
}

export default Nav;