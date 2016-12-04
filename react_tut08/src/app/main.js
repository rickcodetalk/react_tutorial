import React from 'react';
import { Link } from 'react-router'
import { Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class Main extends React.Component {

    constructor(props) {

        super(props)

        this.state = { activeKey: 1 }
    }

    handleSelect(selectedKey) {
        //alert('selected ' + selectedKey);
        this.setState({activeKey:selectedKey})
    }

    render() {
        return (
            <div>
                <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
                    <LinkContainer eventKey={1} to="/javascript">
                        <NavItem>Javascript</NavItem>
                    </LinkContainer>
                    <LinkContainer eventKey={2} to="/angularjs">
                        <NavItem>Angularjs</NavItem>
                    </LinkContainer>
                    <LinkContainer eventKey={3} to="/reactjs">
                        <NavItem>Reactjs</NavItem>
                    </LinkContainer>
                </Nav>

                {this.props.children}
            </div>
        )
    }
}