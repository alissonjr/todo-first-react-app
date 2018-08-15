import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/header';
import Text from './components/WelcomeText/Text';
import TaskBar from './components/taskBar';
import TaskList from './components/taskList';
import TaskCount from './components/taskCount';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Text />
				<TaskBar />
				<TaskCount />
				<TaskList />
			</div>
		);
	}
}

export default App;
