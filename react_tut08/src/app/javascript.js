import React from 'react';

import {Jumbotron, Button} from 'react-bootstrap'

export default class Javascript extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Javascript</h1>
                    <p>Javscript is the most popular computer language!</p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"></img>
                    <p><Button bsStyle="primary">Learn more</Button></p>
                </Jumbotron>

            </div>
        )
    }
}