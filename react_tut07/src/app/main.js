import React from 'react';
import { Link } from 'react-router'

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/javascript">Javascript</Link></li>
                    <li><Link to="/angularjs">AngularJS</Link></li>
                    <li><Link to="/reactjs">ReactJS</Link></li>
                </ul>

                {this.props.children}
            </div>
        )
    }
}