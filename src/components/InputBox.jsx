import React from 'react'
import "./InputBox.css"
function InputBox({id="", name="", type="text", placeholder="", inputWidth='100%', fontSize="1rem", inputRef}) {
  return (
    <div className='input-div' style={{width: inputWidth}}>
      <label htmlFor={id}>{name}</label>
      <input ref={inputRef} type={type}  id={id} placeholder={placeholder} style={{fontSize: fontSize}}/>
    </div>
  )
}

export default InputBox