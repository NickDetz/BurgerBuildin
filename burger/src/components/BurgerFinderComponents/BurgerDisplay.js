import React from 'react'
import PropTypes from 'react'

const  BurgerDisplay = (burgerList) => {
    console.log(burgerList)
    return (
        <div>
           {burgerList.burger[0].name}
        </div>
    )
}

export default BurgerDisplay;
