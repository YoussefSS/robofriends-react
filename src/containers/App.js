import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'

import { connect } from 'react-redux';
import {setSearchField, requestRobots } from '../actions'

// Tells me what piece of state I need to listen to and send down as props
const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField, // we can now use this.props.searchField
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

// By using mapDispatchToProps, we dispatch an action. Dispatching means go to the reducers, pass in the action action type and any payload we might have.
// Here we dispatched the onSearchChange function (which is passed in as a callback prop below) telling it to use the setSearchField action in actions.js
// This tells all reducers: watch outerHeight, there is an action fired, which reducer wants to take care of it?
// This replaces the bottom onSearchBoxChange function
const mapDispatchToProps = (dispatch) => {
   return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)), // we can now use this.props.onSearchChange
        onRequestRobots: () => dispatch(requestRobots()) // This works with redux-thunk, as it's going to catch that we are returning a function (check requestRobots in actions.js)
   } 
}

class App extends React.Component {

    componentDidMount() { 
        this.props.onRequestRobots();
    }

    render() {
        const {searchField, onSearchChange, robots, isPending} = this.props; // these states are now passed in as props instead of state (redux)

        const filteredRobots = robots.filter(robot => { // We can also do this by adding filteredRobots to the state, and setting it in OnSearchBoxChanged
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        if(isPending) // It might take time to fetch the users from the API, so while the array is empty, show loading
        {
            return <h1 className='tc'>Loading</h1>
        } else {
            return (
                <div className='tc'> {/* Remember that you can use React.Fragment instead of divs, but we use div here as we're adding the className */}
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/> {/* passing in a callback function as a prop. Redux: remember that onSearchChange is passed in as a prop */}
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots = {filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
        
    }
   
}

// Connect is saying I'm interested in this part of the state (check the mapStateToProps function), and these actions (check mapDispatchToProps)
// and then it's going to give these props to the App
export default connect(mapStateToProps, mapDispatchToProps)(App);