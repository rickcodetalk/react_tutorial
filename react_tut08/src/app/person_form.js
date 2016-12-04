import React from 'react';

export default class PersonForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            name: "", age: ""
        }
        this.onNameChanged = this.onNameChanged.bind(this)
        this.onAgeChanged = this.onAgeChanged.bind(this)

    }

    onNameChanged(event) {

        this.setState({ name: event.target.value });
    }

    onAgeChanged(event) {

        this.setState({ age: event.target.value });
    }

    onSubmit(event) {
        console.log(this.state.formInput);
        this.props.onPersonChanged(this.state.name, this.state.age)
    }

    render() {



        return (
            <div>
                <input type="text" placeholder="Input Name" value={this.state.name} onChange={this.onNameChanged} />
                <input type="text" placeholder="Input Age" value={this.state.age} onChange={this.onAgeChanged} />
                <button type="submit" onClick={this.onSubmit.bind(this)}>Submit</button>
            </div>
        )
    }
}