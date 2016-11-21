import React from 'react';
import { render } from 'react-dom'

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from './main'
import Javascript from './javascript'
import AngularJS from './angularjs'
import ReactJS from './reactjs'

class App extends React.Component {

    render() {

        return (
            <Router history={browserHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={ReactJS} />
                    <Route path="javascript" component={Javascript} />
                    <Route path="angularjs" component={AngularJS} />
                    <Route path="reactjs" component={ReactJS} />
                </Route>
            </Router>
        )
    }
}

render(<App />, document.getElementById('app'));