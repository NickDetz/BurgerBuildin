import React from 'react'
import {Button, Container, Row, Col, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import burger from './burgpics/burger.png';
import burgers from './burgpics/burgers.png';

 const HomePage = () => {
    return (
        <Container>
            <Row>
                <Col lg={6}>
                    <Card>
                    <Card.Img variant="top" src={burger}/>
                <Link to='/NewBurger'>
                <Button> Make a new Burger</Button>
                </Link>
                </Card>
                </Col>

                <Col lg={6}>
                <Card>
                <Card.Img variant="top" src={burgers}/>
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
