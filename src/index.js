import React from 'react';
import ReactDOM from 'react-dom';
import GridDimentions from './Components/gridDimentions.jsx';
import StartPosition from './Components/startPosition.jsx';
import Instructions from './Components/instructions.jsx';
import MarsGrid from './Components/marsGrid.jsx';


import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <React.Fragment>
            <GridDimentions/>
            <br/>
            <StartPosition/>
            <br/>
            <Instructions/>
            <br/>
            <MarsGrid rows='20' cols='5'/>
        </React.Fragment>
    );
};

ReactDOM.render(<App/>, document.getElementById('main'));