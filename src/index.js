import React from 'react';
import ReactDOM from 'react-dom';
import GridDimensions from './Components/gridDimensions.jsx';
import StartPosition from './Components/startPosition.jsx';
import Instructions from './Components/instructions.jsx';
import MarsGrid from './Components/marsGrid.jsx';
import {MarsRobotContextProvider} from "./mars-robo-context";


import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <React.Fragment>
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