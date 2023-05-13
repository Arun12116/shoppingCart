import React from 'react'
import {useSelector} from "react-redux"


const Contact = () => {
const product=useSelector((state)=>state)
console.log(product);

  return (
    <div>Contact</div>
  )
}

export default Contact