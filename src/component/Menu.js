import React from 'react';
import { Link } from 'react-router';
import List  from './List.js';

class Menu extends React.Component{

	constructor(props){
		super(props)

	}
    
	render(){

		const menuList =  this.props.menuList;

		return(
			<ul>
				{ menuList.map( (value,i)=> <List key={i} > 
					<Link to={value.linkTo} >
						{value.menu}  
					</Link>  
				</List> ) }
			</ul>
		)
	}
}
export default Menu