import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Restricted extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'Heyyyyy you got here!'
        };
    }

    componentWillMount() {
        if (!localStorage.getItem('token')) {
            browserHistory.push('/login');
        }
    }

    // Web token fetching thanks to Arun's auth_example_react/react-app
    componentDidMount() {
        fetch('http://localhost:8000/restricted', {
            method: 'GET',
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        })
        .then((results) => {
            results.json().then((content) => {
                this.setState({message: content.message});
            });
        })
        .catch((err) => {
            browserHistory.push('/login');
        });
    }

    render() {
        return (
            <h1>{this.state.message}</h1>
        );
    }
}

export default Restricted;
