import React from 'react';
import CardList from './CardList';
import {robots} from './robots'; // we destructure because if you look in robots.js, it doesn't export default, meaning it can have multiple exports, so we specify which export we want
import SearchBox from './SearchBox';
import './App.css'

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            robots: robots, // We don't really need this in the state for now, but later on when grabbing users from an API, we'll need to change this from an empty string to the users
            searchfield: ''
        }
    }

    onSearchBoxChanged = (event) => {

        /*  With react, you have to use setState instead of this.state.searchfield =
            This lets the component know that the state has been updated, and so it calls the render() function */
        this.setState({searchfield : event.target.value}) 

        console.log(this.state.filteredRobots);

    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => { // We can also do this by adding filteredRobots to the state, and setting it in OnSearchBoxChanged
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        return (
            <div className='tc'> {/* Remember that you can use React.Fragment instead of divs, but we use div here as we're adding the className */}
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchBoxChanged}/> {/* passing in a callback function as a prop */}
                <CardList robots = {filteredRobots}/>
            </div>
        );
    }
   
}

export default App;