import React from 'react'
import {Button, Container, Row, Col, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import burger from './burgpics/burger.png';
import burgers from './burgpics/burgers.png';

 const HomePage = () => {
    return (
        <Container>
            <Row className="home-page-alignment">
                <Col lg={6}>
                    <Card>
                    <Card.Img variant="top" src={burger} className="home-page-item"/>
                <Link to='/NewBurger'>
                <Button> Make a new Burger</Button>
                </Link>
                </Card>
                </Col>

                <Col lg={6}>
                <Card>
                <Card.Img variant="top" src={burgers} className="home-page-item"/>
                    <Link to='/Burgers'>
                <Button> See Previous Burgers</Button>
                    </Link>
                    </Card>
                </Col>
            </Row>
        </Container>
        
    )
}

export default HomePage;
