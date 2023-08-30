import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <h1>Welcome to Commy E-Commerce!</h1>

                {/* Categories */}
                <div>
                    <Container>
                        <Row className="justify-content-between">
                            <Col sm={{ size: 'auto' }}>
                                <Button color="warning">Groceries</Button>{' '}
                                <Button color="warning">Clothes</Button>{''}
                            </Col>
                        </Row>
                        <Row className="justify-content-between">
                            <Col sm={{ size: 'auto' }}>
                                <Button color="warning">Jewelry</Button>{' '}
                                <Button color="warning">Electronics</Button>{' '}
                            </Col>
                        </Row>
                        <Row className="justify-content-between">
                            <Col sm={{ size: 'auto' }}>
                                <Button color="warning">Home Appliances</Button>{' '}
                                <Button color="warning">Auotomotive</Button>{' '}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
