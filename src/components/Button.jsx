import React from 'react'

// const buttonStyle = {
//   "brackgroundColor": `${var(--accent)}`
// };

const Button = (props) => {
  return (
    <div className='button' > {props.name}</div>
  )
}

export default Button
