import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';

const RobotInstructions = () => {

    const [instructions, setInstructions] = useState(['New']);

    const updateInstruction = (eventKey, event, index) => {

        // Take a copy of latest instructions and update the item with new value
        let instr = [...instructions];
        instr[index] = eventKey;

        // Remove item from the array if action selected is 'Remove'
        if(eventKey === 'Remove') {
            instr.splice(index,1);
        }

        // Add 'New' item at end of the array if updated item is the last item
        instr = index === (instructions.length -1 ) ? [...instr, 'New'] : instr;

        //Finally update the instructions with updated item
        setInstructions(instr);
    };

    return (
        <Container>
            <Row>
                Enter the Instructions to the Rebot
            </Row>
            <Row>
                <Col>
                    {instructions.map( (item, index) =>
                        <Dropdown onSelect={ (eventKey, event) => updateInstruction(eventKey, event, index)}>
                            <Dropdown.Toggle>
                                {item}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item key='Left' eventKey='Left'>Left</Dropdown.Item>
                                <Dropdown.Item key='Right' eventKey='Right'>Right</Dropdown.Item>
                                <Dropdown.Item key='Forward' eventKey='Forward'>Forward</Dropdown.Item>
                                <Dropdown.Item key='Remove' eventKey='Remove'>Remove this</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default RobotInstructions;