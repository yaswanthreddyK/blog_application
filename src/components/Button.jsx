import React from 'react'
import "./Button.css"
function Button({type="submit", text="Click",className, ...props}) {
  return (
        <button  className={className+" Button"}  type={type} {...props}>{text}</button>
  )
}

export default Button