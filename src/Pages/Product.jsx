import React from 'react'
import Card from "../Components/Card.jsx"
import g31 from "../Assets/img/g31.jpg"
import i3 from "../Assets/img/i3.jpg"
const Product = () => {
  return (
    <div><h1>Product</h1>
    <Card name='Motorola G31' desc='It is a smartphone' price={12999} qty={1} color='blue' iSrc={g31}/>
    <br/>
    <Card name='Intel i3 12100f' desc='It is a processor' price={7999} qty={1} color='silver' iSrc = {i3}/>
    <br/>
    <Card name='Lamp' desc='It is a lamp' price={999} qty={1} color='white'/>
    </div>
  )
}

export default Product