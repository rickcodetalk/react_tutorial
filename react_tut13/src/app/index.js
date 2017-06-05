import React from 'react';
import { render } from 'react-dom';
import {createStore} from 'redux'
import {people} from './reducers/people'
import { Provider} from 'react-redux'
import MainContainer from './containers/MainContainer'

let store = createStore(people, [{name:"Rick Lee", age:123}])

store.subscribe(() => {
    console.log(store.getState())
})

window.store = store


class App extends React.Component {

    render() {

        return (
            <Provider store={store}>
                <MainContainer />
            </Provider>
        )
    }
}

render(<App />, document.getElementById('app'));