import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'

function App() {

    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }

    // Converting the above constructor to using react hooks
    // array destructuring, useState is going to return 2 things. 1 is the name of the variable ( a piece of state ), 2 is the function that changes this variable (this state).
    // in useState we pass the default value of robots which is an empty array
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    // componentDidMount() { // since this is part of React.Component, we are not using arrow functions
        
    //     /* The following code makes an HTTP request to get the data from the link, then converts the data into json, then sets the state of App */

    //     /*fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => {
    //         return response.json(); // converting the response into json
    //     })
    //     .then(users => {
    //         this.setState({robots: users});
    //     });*/

    //     // the above code can be reduced to:
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json()) // converting the response into json
    //     .then(users => this.setState({robots: users}));
    // }

    const onSearchBoxChanged = (event) => {
        setSearchField(event.target.value);
    }

    const filteredRobots = robots.filter(robot => { // We can also do this by adding filteredRobots to the state, and setting it in OnSearchBoxChanged
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if(robots.length === 0) // It might take time to fetch the users from the API, so while the array is empty, show loading
    {
        return <h1 className='tc'>Loading</h1>
    } else {
        return (
            <div className='tc'> {/* Remember that you can use React.Fragment instead of divs, but we use div here as we're adding the className */}
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchBoxChanged}/> {/* passing in a callback function as a prop */}
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots = {filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}
        

export default App;