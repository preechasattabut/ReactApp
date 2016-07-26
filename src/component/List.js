import React from 'react';

class List extends React.Component{
	render(){
		return(
			<li> {this.props.children} </li>
		)
	}
}
export default List;