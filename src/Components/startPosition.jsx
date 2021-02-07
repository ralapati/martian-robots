import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const StartPosition = () => {

    const [startRow, updateRow] = useState(0);
    const [startColumn, updateColumn] = useState(0);

    const rowUpdated = (eventKey) => {
        updateRow(eventKey);
    };

    const columnUpdated = (eventKey) => {
        updateColumn(eventKey);
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
                    <Dropdown as={ButtonGroup} onSelect={(eventKey, event) => rowUpdated(eventKey, event)}>
                        <Button>
                            Initial Row - {startRow}
                        </Button>
                        <Dropdown.Toggle split />
                        <Dropdown.Menu style={{height: '185px', overflowY: 'scroll'}}>
                            {Array.from({length: 20}, (item, index) =>
                                <Dropdown.Item key={'startRow' + index} eventKey={index}>
                                    Initial Row - {index}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>
                    <Dropdown  as={ButtonGroup} onSelect={(eventKey, event) => columnUpdated(eventKey, event)}>
                        <Button>
                            Initial Column - {startColumn}
                        </Button>
                        <Dropdown.Toggle split />
                        <Dropdown.Menu style={{height: '185px', overflowY: 'scroll'}}>
                            {Array.from({length: 20}, (item, index) =>
                                <Dropdown.Item key={'startingColumn' + index} eventKey={index}>
                                    Initial Column - {index}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>
                    <ToggleButtonGroup type='radio' name='startOrientation' defaultValue='North'>
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