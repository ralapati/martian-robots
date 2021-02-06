import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

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
                Enter starting position of the Robot
            </Row>
            <Row>
                <Col>
                    Starting Row - {startRow}
                </Col>
                <Col>
                    Starting Column - {startColumn}
                </Col>
                <Col>
                    Starting orientation
                </Col>
            </Row>
            <Row>
                <Col>
                   <Dropdown onSelect={ (eventKey, event) => rowUpdated(eventKey, event)}>
                       <Dropdown.Toggle>
                           Initial Row
                       </Dropdown.Toggle>
                       <Dropdown.Menu style={{height: '200px', overflowY: 'scroll'}}>
                           {Array.from({length: 20}, (item, index) =>
                               <Dropdown.Item key={'startRow'+index} eventKey={index}> {index}</Dropdown.Item>
                           )}
                       </Dropdown.Menu>
                   </Dropdown>
                </Col>
                <Col>
                   <Dropdown onSelect={(eventKey, event) => columnUpdated(eventKey, event)}>
                       <Dropdown.Toggle>
                           Initial Column
                       </Dropdown.Toggle>
                       <Dropdown.Menu style={{height: '200px', overflowY: 'scroll'}}>
                           {Array.from({length: 20}, (item, index) =>
                               <Dropdown.Item key={'startingColumn'+index} eventKey={index}>{index}</Dropdown.Item>
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