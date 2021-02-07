import React, {useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {MarsRobotContext} from "../mars-robo-context";

const Instructions = () => {

    const [state, dispatch] = useContext(MarsRobotContext);
    const {instructions} = state;


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
        dispatch({
            type: 'SET_INSTRUCTIONS',
            payload: {
                instructions: [...instr]
            }
        })
    };

    return (
        <Container>
            <Row>
                Select Instructions to Rebot
            </Row>
            <Row>
                <Col>
                    {instructions.map( (item, index) =>
                        <Dropdown as={ButtonGroup} onSelect={ (eventKey, event) => updateInstruction(eventKey, event, index)} style={{paddingRight: '5px'}}>
                            <Button>
                                {item}
                            </Button>
                            <Dropdown.Toggle split/>
                            <Dropdown.Menu>
                                <Dropdown.Item key='Left' eventKey='Left'>Left</Dropdown.Item>
                                <Dropdown.Item key='Right' eventKey='Right'>Right</Dropdown.Item>
                                <Dropdown.Item key='Forward' eventKey='Forward'>Forward</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item key='Remove' eventKey='Remove'>Remove this</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Instructions;