import React from 'react'

const Review = (props) => {
  return (
    <div>
      <p>Star: {props.star}</p>
      <p>Message: {props.children}</p>
    </div>
  )
}

export default Review
