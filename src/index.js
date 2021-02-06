import React from 'react';
import ReactDOM from 'react-dom';
import GridDimentions from './Components/gridDimentions.jsx';
import StartPosition from './Components/startPosition.jsx';
import RobotInstructions from './Components/robotInstructions.jsx';
import MarsGrid from './Components/marsGrid.jsx';



import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <React.Fragment>
            <GridDimentions/>
            <StartPosition/>
            <RobotInstructions/>

            <MarsGrid rows='20' cols='5'/>
        </React.Fragment>
    );
};

ReactDOM.render(<App/>, document.getElementById('main'));