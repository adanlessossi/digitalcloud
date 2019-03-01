import React, { Component } from 'react';

import './App.css';
import Navigationbar from './components/navbar/Navigationbar';
import Footer from './components/Footer/Footer';

class App extends Component {
	render() {
		return (
			<div className='App container'>
				<Navigationbar />
				<Footer />
			</div>
		);
	}
}

export default App;
