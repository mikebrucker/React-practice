import React, { Component } from 'react';
import Roster from './Roster';
import AddPlayer from './AddPlayer';

class App extends Component {
	state = {
		roster: [
			{ name: 'Mike', age: 30, position: 'Goalie', id: 1 },
			{ name: 'Barry', age: 30, position: 'Defense', id: 2 },
			{ name: 'Wardo', age: 33, position: 'Offense', id: 3 },
		]
	}

	addPlayer = player => {
		player.id = Math.random();
		let roster = [...this.state.roster, player];
		this.setState({
			roster: roster
		});
	}

	deletePlayer = id => {
		let roster = this.state.roster.filter(player => {
			return player.id !== id;
		});
		this.setState({
			roster: roster
		});
	}

	render() {
		return (
		<div>
			<h1>Bandits</h1>
			<Roster deletePlayer={this.deletePlayer} roster={this.state.roster} />
			<AddPlayer addPlayer={this.addPlayer} />
		</div>
    	);
  	}
}

export default App;
