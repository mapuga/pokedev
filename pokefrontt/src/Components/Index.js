import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import  'bootstrap/dist/js/bootstrap.bundle.min';
import React,{Component} from 'react';
// import Pokemon from './Pokemon';
import Nav from './Nav';

class Index extends Component{

	render(){
		return(
			<div className='container'>
				<Nav />
			</div>
		);
	}
}

export default Index;