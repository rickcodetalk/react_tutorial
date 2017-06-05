import React from 'react';
import { render } from 'react-dom';
import Person from './Person'
import PersonForm from './PersonForm'

export default class Main extends React.Component {

    constructor() {

        super();

        this.refresh = this.refresh.bind(this)
    }

    refresh() {

    }

    onSubmit(name, age) {

        this.props.onAddPerson({name:name, age:age})
        //this.setState({people:this.state.people.concat({name:name, age:age})})
        //personAction.addPerson({name:name, age:age})

    }

    render() {

        console.log(this.props)
        const peopleList = this.props.people.map( x => {

            return <Person key={x.name} {...x} />
        })

        return (
            <div>
                <h2>This is a React component</h2>
                {peopleList}
                <PersonForm onSubmit={this.onSubmit.bind(this)} />

            </div>
        )
    }
}