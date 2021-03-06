import React, {useContext} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {MarsRobotContext} from "../mars-robo-context";

const MarsGrid = () => {

    const [state] = useContext(MarsRobotContext);
    const {rows, columns} = state.dimensions;
    const {grid, robotLost} = state;

    return (
        <Container id='marsGrid'>
            {robotLost === true &&
                <Row>
                    Robot Lost!!!
                </Row>
            }

            {(rows !== 0 && columns !== 0) ?
                grid.slice().reverse().map((gridRow, rowIndex) =>
                    <Row key={rowIndex}>
                        {gridRow.map((gridCol, colIndex) => <Col
                                style={{width: '50px', height: '50px', background: '#bbeffd', border: '1px solid #61dafb'}}
                                key={colIndex}>
                            {gridCol}
                            </Col>
                        )}
                    </Row>
                )
                : <div>Please set dimensions & starting position to preview the Mars in a grid format.</div>}
        </Container>
    );
};

export default MarsGrid;