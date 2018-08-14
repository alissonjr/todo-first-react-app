import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/header'
import TaskBar from './components/taskbar';
import TaskList from './components/tasklist';
import './App.css';

import HelloWorld from './components/HelloWorld/HelloWorld';
import Text from './components/WelcomeText/Text';
import ConfirmButton from './components/Buttons/ConfirmButton';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<TaskBar />
				<TaskList />
			</div>
		);
	}
}

export default App;
