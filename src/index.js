import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './component/Menu.js';
import Home from './page/Home.js';
import Portfolio from './page/Portfolio.js';
import MyProfile from './page/MyProfile.js';
import { Router,Route,IndexRoute,browserHistory } from 'react-router';



class App extends React.Component{
	render(){
		return(
			<div>
				<header />
				<Menu />
				<div className='content'>
					XXXX
					{ this.props.children }
				</div>
				<footer />
			</div>
		)
	}
}
export default App;


ReactDOM.render(
	<Router history={ browserHistory } >
		<Route path='/' component={ App }>
			<IndexRoute component={ Home } />
			<Route path='/home' component={ Home } />
			<Route path='/portfolio' component={ Portfolio } />
			<Route path='/myprofile' component={ MyProfile } />
		</Route>
	</Router>,
	document.getElementById('app'))