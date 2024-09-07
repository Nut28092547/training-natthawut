import React from 'react'

const Cartitem = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Price: {props.price}</p>
      <p>Qty: {props.qty}</p>
      <hr />
    </div>
  )
}

export default Cartitem