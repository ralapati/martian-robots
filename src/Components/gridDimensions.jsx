import React, {useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {MarsRobotContext} from "../mars-robo-context";

const GridDimensions = () => {

    const [state, dispatch] = useContext(MarsRobotContext);
    const rowsUpdated = (eventKey) => {
        dispatch({
            type: 'SET_DIMENSIONS',
            payload: {
                rows: parseInt(eventKey),
                columns: state.dimensions.columns,
                grid: [...Array(parseInt(eventKey))].map(() => Array(state.dimensions.columns).fill(0))
            }
        });
    };

    const columnsUpdated = (eventKey) => {
        dispatch({
            type: 'SET_DIMENSIONS',
            payload: {
                rows: state.dimensions.rows,
                columns: parseInt(eventKey),
                grid: [...Array(state.dimensions.rows)].map(() => Array(parseInt(eventKey)).fill(0))
            }
        })
    };

    return (
        <Container>
            <Row>
                Select size of the grid
            </Row>
            <Row>
                <Col sm={3}>
                    <Dropdown as={ButtonGroup} onSelect = { (eventKey, event) => rowsUpdated(eventKey, event)}>
                        <Button>
                            Rows - {state.dimensions.rows} (Max 50)
                        </Button>
                        <Dropdown.Toggle split />
                        <Dropdown.Menu style={{height: '185px', overflowY: 'scroll'}}>
                            {Array.from({length : 50}, (item, index) =>
                                <Dropdown.Item key={'row' + index} eventKey={index+1}>Rows - {index+1}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col sm={3}>
                    <Dropdown as={ButtonGroup} onSelect={ (eventKey, event) => columnsUpdated(eventKey, event)}>
                        <Button>
                            Columns - {state.dimensions.columns} (Max 50)
                        </Button>
                        <Dropdown.Toggle split />
                        <Dropdown.Menu style={{height: '185px', overflowY: 'scroll'}}>
                            {Array.from({length: 50}, (item, index) =>
                                <Dropdown.Item key={'column'+index} eventKey={index+1}>Columns - {index+1}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Container>
    );
};

export default GridDimensions;