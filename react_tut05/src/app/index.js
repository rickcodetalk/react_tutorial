import React from 'react';
import { render } from 'react-dom';

import Person from './person'
import PersonForm from './person_form'

class Main extends React.Component {

    constructor() {

        super();

        this.state = {
            name: "Rick Lee", age: 19
        }
    }

    onPersonChanged(name, age) {
        console.log(name);
        console.log(age);

        this.setState({ name: name, age: age })
    }

    render() {

        return (
            <div>
                <h2>This is a React component</h2>
                <Person name={this.state.name} age={this.state.age} />
                <PersonForm onPersonChanged={this.onPersonChanged.bind(this)} />

            </div>
        )
    }
}

/*
                <Person name={this.state.name} age={this.state.age} />

                <PersonForm onPersonChanged={this.onPersonChanged.bind(this)} />
*/

render(<Main />, document.getElementById('app'));