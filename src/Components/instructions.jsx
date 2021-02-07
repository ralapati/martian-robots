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


    // TODO - Move most of this logic to a factory / utility function(s)
    const updateInstruction = (eventKey, event, index) => {

        // Take a copy of latest instructions and update the item with new value
        let instr = [...instructions];
        instr[index] = eventKey;

        // Remove item from the array if action selected is 'Remove'
        if (eventKey === 'Remove') {
            instr.splice(index, 1);
        }

        // Add 'New' item at end of the array if updated item is the last item
        instr = index === (instructions.length - 1) ? [...instr, 'New'] : instr;


        // Get a copy of grid and update it with robot path
        let newGrid = [...state.grid];  //TODO - Use lodash to deepcopy
        let position = {
            row: state.startPosition.initialRow,
            column: state.startPosition.initialColumn,
            orientation: state.startPosition.orientation
        };

        let robotLost = false;

        for (let counter = 0; counter < (instr.length - 1); counter++) {
            if (instr[counter] === 'Forward') {
                if (position.orientation === 'North') position.row = position.row + 1;
                if (position.orientation === 'East') position.column = position.column + 1;
                if (position.orientation === 'South') position.row = position.row - 1;
                if (position.orientation === 'West') position.column = position.column - 1;

                // check if the robot is lost
                if (position.row >= state.dimensions.rows || position.column >= state.dimensions.columns || position.row < 0 || position.column < 0) {
                    robotLost = true;
                    break;
                } else {
                    newGrid[position.row][position.column] = position.orientation;
                }

            } else if (instr[counter] === 'Right') {
                const moveRight = {North: 'East', East: 'South', South: 'West', West: 'North'};
                position.orientation = moveRight[position.orientation];
                newGrid[position.row][position.column] = position.orientation;
            } else if (instr[counter] === 'Left') {
                const moveLeft = {North: 'West', West: 'South', South: 'East', East: 'North'};
                position.orientation = moveLeft[position.orientation];
                newGrid[position.row][position.column] = position.orientation;
            } else {
                throw Error('Unrecognised Instruction')
            }
        }

        //Finally update the instructions with updated details
        dispatch({
            type: 'SET_INSTRUCTIONS',
            payload: {
                instructions: [...instr],
                position: {...position},
                grid: [...newGrid],
                robotLost: robotLost
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
                    {instructions.map((item, index) =>
                        <Dropdown as={ButtonGroup}
                                  onSelect={(eventKey, event) => updateInstruction(eventKey, event, index)}
                                  style={{paddingRight: '5px'}}>
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