import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() { // since this is part of React.Component, we are not using arrow functions
        
        /* The following code makes an HTTP request to get the data from the link, then converts the data into json, then sets the state of App */

        /*fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json(); // converting the response into json
        })
        .then(users => {
            this.setState({robots: users});
        });*/

        // the above code can be reduced to:
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) // converting the response into json
        .then(users => this.setState({robots: users}));
    }

    onSearchBoxChanged = (event) => { // We must use arrow functions to ensure that the 'this' keyword points to this class, and not the HTML tag that called this

        /*  With react, you have to use setState instead of this.state.searchfield =
            This lets the component know that the state has been updated, and so it calls the render() function */
        this.setState({searchfield : event.target.value}) 

        console.log(this.state.filteredRobots);

    }

    render() {
        const {robots, searchfield} = this.state;

        const filteredRobots = robots.filter(robot => { // We can also do this by adding filteredRobots to the state, and setting it in OnSearchBoxChanged
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        if(robots.length === 0) // It might take time to fetch the users from the API, so while the array is empty, show loading
        {
            return <h1 className='tc'>Loading</h1>
        } else {
            return (
                <div className='tc'> {/* Remember that you can use React.Fragment instead of divs, but we use div here as we're adding the className */}
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchBoxChanged}/> {/* passing in a callback function as a prop */}
                    <Scroll>
                        <CardList robots = {filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
        
    }
   
}

export default App;