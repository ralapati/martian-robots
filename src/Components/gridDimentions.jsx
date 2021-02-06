import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GridDimentions = () => {


    return (
        <Container>
            <Row>
                Enter size of the grid
            </Row>
            <Row>
                <Col>Rows</Col>
                <Col>Columns</Col>
            </Row>
            <Row>
                <Col>
                    5
                </Col>
                <Col>
                    10
                </Col>
            </Row>
        </Container>
    );
};

export default GridDimentions;