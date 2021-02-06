import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RobotInstructions = () => {

    return (
        <Container>
            <Row>
                Enter the Instructions to the Rebot
            </Row>
            <Row>
                <Col>
                    Left | Right | Forward
                </Col>
            </Row>
            <Row>
                <Col>

                </Col>
            </Row>
        </Container>
    );
};

export default RobotInstructions;