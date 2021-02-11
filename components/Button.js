import React from 'react'

export const Button = ({variant='', disableShadow=false, disabled=false,innerText}) => {  
   
  const shadow = disableShadow
  ? {boxShadow: 'none', backgroundColor: '#3d5afe', color: 'white'} 
  : {boxShadow: '0px 2px 3px 0px rgba(33, 33, 33, 0.2)'}

  return (
    <button 
      disabled={disabled} 
      className={variant} 
      style={!disabled ? shadow : {} }
      
    >
       {innerText}
    </button>
  )
}
