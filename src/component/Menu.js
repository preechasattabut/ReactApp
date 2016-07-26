import React from 'react';
import { Link } from 'react-router';

class Menu extends React.Component{
	render(){
		return(
			<ul>
				<li> <Link to='Home' > Home  </Link> </li>
				<li> <Link to='portfolio' > Portfolio  </Link> </li>
				<li> <Link to='myprofile' > My Profile  </Link> </li>
			</ul>
		)
	}
}
export default Menu