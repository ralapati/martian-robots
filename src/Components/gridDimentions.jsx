import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';

const GridDimentions = () => {

    const [rows, updateRows] = useState(0);
    const [columns, updateColumns] = useState(0);
    const rowsUpdated = (eventKey) => {
      updateRows(eventKey);
    };

    const columnsUpdated = (eventKey) => {
        updateColumns(eventKey);
    };

    return (
        <Container>
            <Row>
                Enter size of the grid
            </Row>
            <Row>
                <Col>Rows - {rows}</Col>
                <Col>Columns - {columns}</Col>
            </Row>
            <Row>
                <Col>
                    <Dropdown onSelect = { (eventKey, event) => rowsUpdated(eventKey, event)}>
                        <Dropdown.Toggle>
                            Select Rows
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{height: '200px', overflowY: 'scroll'}}>
                            {Array.from({length : 50}, (item, index) =>
                                <Dropdown.Item key={'row' + index} eventKey={index+1}>{index+1}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>
                    <Dropdown onSelect={ (eventKey, event) => columnsUpdated(eventKey, event)}>
                        <Dropdown.Toggle>
                            Selected Columns
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{height: '200px', overflowY: 'scroll'}}>
                            {Array.from({length: 50}, (item, index) =>
                                <Dropdown.Item key={'column'+index} eventKey={index+1}>{index+1}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Container>
    );
};

export default GridDimentions;