import React from 'react';

export default class Person extends React.Component {

    render() {

        return (
            <div>
                <h2>Name: {this.props.name}</h2>
                <p>Age: {this.props.age}</p>
            </div>
        )
    }
}