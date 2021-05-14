import React from 'react'
import '../Buttons/button.css'

function YelloRoundButton({text}) {
  const buttonStyle = {
    padding: '5px 1.5rem',
    borderRadius: '50px',
    // margin: '.5rem auto',
    margin:'0 auto',
    fontWeight: 'bold',
    minWidth: '130px',
    width:'40%',
    marginLeft:'6em',
    color:"purple",
    backgroundColor:'orange '
  }
  return (
    <button style={buttonStyle} className='yellowButton' >{text}</button>
  )
}

export default YelloRoundButton
