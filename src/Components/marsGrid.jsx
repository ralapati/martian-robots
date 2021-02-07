import React, {useContext} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {MarsRobotContext} from "../mars-robo-context";

const MarsGrid = () => {

    const [state] = useContext(MarsRobotContext);
    const {rows, columns} = state.dimensions;

    return (
        <Container>
            {(rows !== 0 && columns !== 0) ?
                Array.from({length: rows}, (el, index) =>
                <Row key={index}>
                    {Array.from({length: columns}, (item, colIndex) =>
                            <Col style={{width: '50px', height: '50px', background: '#bbeffd', border: '1px solid #61dafb'}} key={colIndex}>
                                &nbsp;
                            </Col>
                        )
                    }
                </Row>
            ) : <div> Please set dimensions of the grid</div>}
        </Container>
    );
};

export default MarsGrid;