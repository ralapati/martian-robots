import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

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
                Select size of the grid
            </Row>
            <Row>
                <Col sm={3}>
                    <Dropdown as={ButtonGroup} onSelect = { (eventKey, event) => rowsUpdated(eventKey, event)}>
                        <Button>
                            Rows - {rows} (Max 50)
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
                            Columns - {columns} (Max 50)
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

export default GridDimentions;