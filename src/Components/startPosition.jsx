import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const StartPosition = () => {

    return (
        <Container>
            <Row>
                Enter starting position of the Robot
            </Row>
            <Row>
                <Col>
                    Starting Row
                </Col>
                <Col>
                    Starting Column
                </Col>
                <Col>
                    Starting orientation
                </Col>
            </Row>
            <Row>
                <Col>
                    Row 4
                </Col>
                <Col>
                    Column 5
                </Col>
                <Col>
                    North | East | South | West
                </Col>
            </Row>
        </Container>
    );
};

export default StartPosition;