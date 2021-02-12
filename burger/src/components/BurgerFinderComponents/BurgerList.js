import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {ListGroup, Button, Container} from 'react-bootstrap'
import BurgerDisplay from './BurgerDisplay'

 const  BurgerList = () => {

    const [burgerList, BurgerListArr] = useState();
    const [isfilled, filledBurger] = useState(false);

        useEffect(() => {
           axios.get(`http://localhost:8080/burger-builder/burger`).then(res =>{
                BurgerListArr(res.data)
                
           })  
        },[])

        const SeeList = () =>{
            console.log(burgerList)
            filledBurger(true)
        }


    return (
       <Container className="display-flex justify-content-center">
                <Button onClick={() => SeeList()} > button</Button>
               {isfilled && <div>{[burgerList[0].name]}</div>}
               
                    
                

               {/* {isfilled && <BurgerDisplay key={[burgerList.id]} burger={[burgerList]}/>} */}
       </Container>
    )
}

export default BurgerList;
