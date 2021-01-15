import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div>
            We can control Robots wandering on the Mars!
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('main'));