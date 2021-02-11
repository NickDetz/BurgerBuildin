import React, {useState} from 'react'
import axios from 'axios';
import { Container, Form, Modal, Button, Col, Row, InputGroup, ToggleButton, ToggleButtonGroup, FormControl } from 'react-bootstrap'
import topBun from './burgeringrediants/topbun.png';
import botBun from './burgeringrediants/bottombun.png';
import cheese from './burgeringrediants/cheese.png';
import onion from './burgeringrediants/Onion.png';
import pickle from './burgeringrediants/pickles.png';
import patty from './burgeringrediants/patty.png';
import './burger.css'


 const Burger = () => {
    const [burgerName, setBurgerName] = useState('');
    const [ingrediant, setIngrediant] = useState('');
    const [ingredList, addIngred] = useState([]);




    
    


    return (
        <Container>
            
        <Form.Group>
        <Form.Control size="lg" onChange={e => setBurgerName(e.target.value)} placeholder="Name your Burger" />
        </Form.Group>
        <Row>
            <Col>
        <Modal.Dialog >
                <Modal.Header className="display-flex justify-content-center">
                <Modal.Title >{burgerName}</Modal.Title>
                </Modal.Header>

                 <Modal.Body>
                 <img src={topBun} className='foodImage'/>
                 {ingredList.length > 0 && <img src={cheese} className='foodImage'/>}
                 {ingredList.length > 1 && <img src={onion} className='foodImage'/>}
                 {ingredList.length > 2 && <img src={pickle} className='foodImage'/>}
                 {ingredList.length > 3 && <img src={patty} className='foodImage'/>}
                 <img src={botBun} className='foodImage'/>
                 
                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary">Send</Button>
            </Modal.Footer>
            </Modal.Dialog>
            </Col>
            <Col>
            <Modal.Dialog>
                <Modal.Header closeButton>
                <Modal.Title>Ingrediants</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                     placeholder="ingrediant Name"
                        aria-label="Username"
                     aria-describedby="basic-addon1"
                     onChange={(e) => setIngrediant(e.target.value)}
                        />
                        </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                {ingredList.length < 4 && <Button variant='info' onClick={() => addIngred([...ingredList, ingrediant])}>add ingrediant</Button> }
                {ingredList.length > 0 && <Button variant='danger' onClick={() => addIngred([])} >Clear</Button>}
                
                </Modal.Footer>
                </Modal.Dialog>
                
            </Col>
            </Row>

        </Container>
    )
}

export default Burger;
