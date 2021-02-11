import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {ListGroup, Button} from 'react-bootstrap'

 const  BurgerList = () => {

    const [burgerList, BurgerListArr] = useState();

        useEffect(() => {
           axios.get(`http://localhost:8080/burger-builder/burger`).then(res =>{
                BurgerListArr(res.data)
                
           })
        },[])

        const SeeList = () =>{
            console.log(burgerList)
        }


    return (
        <div className="display-flex justify-content-center">
                <Button onClick={() => SeeList()} > button</Button>
        </div>
    )
}

export default BurgerList;
