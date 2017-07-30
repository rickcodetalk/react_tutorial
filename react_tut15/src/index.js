import React from 'react'
import {render} from 'react-dom'
import {Button, Icon, Card} from 'antd';

class App extends React.Component {
    render() {
        return (
            <div>React Tutorial@rickcodetalk
                <Button type="primary">Primary</Button>
                <Icon type="link" />
                  <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        )
    }
}

render(
    <App/>, document.getElementById('app'))