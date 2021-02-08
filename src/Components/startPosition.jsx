import React, {useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {MarsRobotContext} from "../mars-robo-context";

const StartPosition = () => {

    const [state, dispatch] = useContext(MarsRobotContext);
    const {initialRow, initialColumn, orientation} = state.startPosition;

    const rowUpdated = (eventKey) => {

        let newGrid = [...Array(state.dimensions.rows)].map(() => Array(state.dimensions.columns).fill(''));
        newGrid[eventKey][state.startPosition.initialColumn] = state.startPosition.orientation;

        dispatch({
            type: 'SET_INITIAL_POSITION',
            payload: {
                initialRow: eventKey,
                initialColumn: state.startPosition.initialColumn,
                orientation: state.startPosition.orientation,
                grid: [...newGrid]
            }
        });
    };

    const columnUpdated = (eventKey) => {

        let newGrid = [...Array(state.dimensions.rows)].map(() => Array(state.dimensions.columns).fill(''));
        newGrid[state.startPosition.initialRow][eventKey] = state.startPosition.orientation;

        dispatch({
            type: 'SET_INITIAL_POSITION',
            payload: {
                initialRow: state.startPosition.initialRow,
                initialColumn: eventKey,
                orientation: state.startPosition.orientation,
                grid: [...newGrid]
            }
        });
    };

    const orientationUpdated = (newValue) => {

        let newGrid = [...Array(state.dimensions.rows)].map(() => Array(state.dimensions.columns).fill(''));
        newGrid[state.startPosition.initialRow][state.startPosition.initialColumn] = newValue;

        dispatch({
            type: 'SET_INITIAL_POSITION',
            payload: {
                initialRow: state.startPosition.initialRow,
                initialColumn: state.startPosition.initialColumn,
                orientation: newValue,
                grid: [...newGrid]
            }
        });
    };

    return (
        <Container>
            <Row>
                Select starting position of the Robot
            </Row>
            <Row>
                <Col>
                    &nbsp;
                </Col>
                <Col>
                    &nbsp;
                </Col>
                <Col>
                    Starting orientation
                </Col>
            </Row>
            <Row>
                <Col>
                    <Dropdown as={ButtonGroup} onSelect={(eventKey, event) => rowUpdated(parseInt(eventKey), event)}>
                        <Button>
                            Initial Row - {initialRow}
                        </Button>
                        <Dropdown.Toggle split/>
                        <Dropdown.Menu style={{height: '185px', overflowY: 'scroll'}}>
                            {Array.from({length: state.dimensions.rows}, (item, index) =>
                                <Dropdown.Item key={'startRow' + index} eventKey={index}>
                                    Initial Row - {index}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>
                    <Dropdown as={ButtonGroup} onSelect={(eventKey, event) => columnUpdated(parseInt(eventKey), event)}>
                        <Button>
                            Initial Column - {initialColumn}
                        </Button>
                        <Dropdown.Toggle split/>
                        <Dropdown.Menu style={{height: '185px', overflowY: 'scroll'}}>
                            {Array.from({length: state.dimensions.columns}, (item, index) =>
                                <Dropdown.Item key={'startingColumn' + index} eventKey={index}>
                                    Initial Column - {index}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>
                    <ToggleButtonGroup type='radio' name='startOrientation' defaultValue={orientation}
                                       onChange={(newValue) => orientationUpdated(newValue)}>
                        <ToggleButton value='North' variant='secondary'>North</ToggleButton>
                        <ToggleButton value='East' variant='secondary'>East</ToggleButton>
                        <ToggleButton value='West' variant='secondary'>West</ToggleButton>
                        <ToggleButton value='South' variant='secondary'>South</ToggleButton>
                    </ToggleButtonGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default StartPosition;