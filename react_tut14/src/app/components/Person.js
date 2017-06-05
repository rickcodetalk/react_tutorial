import React from 'react';

export default class Person extends React.Component {

    render() {

        return (
            <div>
                <h2>{this.props.name} ({this.props.age}) </h2>
            </div>
        )
    }
}