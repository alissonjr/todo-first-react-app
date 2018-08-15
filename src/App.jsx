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
				<footer>
					<p>
						Made with ❤ in <a class="badge badge-light" href="https://pt.wikipedia.org/wiki/Baixo_Guandu">Baixo Guandu-ES</a> by <a class="badge badge-light" href="https://github.com/alissonjr">@alissonjr</a>
					</p>
				</footer>
			</div>
		);
	}
}

export default App;
