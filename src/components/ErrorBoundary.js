import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) { // this is a way to get props in the constructor
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {  /* One of reacts lifecycle hooks that is similar to javas try catch block */
        this.setState({hasError : true});
    }

    render () {
        if(this.state.hasError) {
            return <h1>Oooops. That is not good</h1>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;