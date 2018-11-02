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

	render() {
		return (
		<div>
			<h1>Bandits</h1>
			<Roster roster={this.state.roster}/>
			<AddPlayer />
		</div>
    	);
  	}
}

export default App;
