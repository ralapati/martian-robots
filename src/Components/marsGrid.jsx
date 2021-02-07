import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MarsGrid = ({rows = 1, cols = 1}) => {

    return (
        <Container>
            {Array.from({length: rows}, (el, index) =>
                <Row key={index}>
                    {Array.from({length: cols}, (item, colIndex) =>
                            <Col style={{width: '50px', height: '50px', background: '#bbeffd', border: '1px solid #61dafb'}} key={colIndex}>
                                &nbsp;
                            </Col>
                        )
                    }
                </Row>
            )}
        </Container>
    );
};

export default MarsGrid;