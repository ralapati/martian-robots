import React from 'react';
import ReactDOM from 'react-dom';
import GridDimensions from './Components/gridDimensions.jsx';
import StartPosition from './Components/startPosition.jsx';
import Instructions from './Components/instructions.jsx';
import MarsGrid from './Components/marsGrid.jsx';
import {MarsRobotContextProvider} from "./mars-robo-context";

import Card from 'react-bootstrap/Card';


import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <React.Fragment>
            <br/>
            <Card style={{width: '900px', margin: 'auto'}}>
                <Card.Body>
                    <Card.Title>
                        <h4>Martian Robots</h4>
                    </Card.Title>
                    <Card.Text>
                        This is a sample ReactJS project to help control Robots on Mars - Developed by Raghu Alapati
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <MarsRobotContextProvider>
                <GridDimensions/>
                <br/>
                <StartPosition/>
                <br/>
                <Instructions/>
                <br/>
                <MarsGrid/>
            </MarsRobotContextProvider>
        </React.Fragment>
    );
};

ReactDOM.render(<App/>, document.getElementById('main'));