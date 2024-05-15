import React from 'react'

const Footer = ({color}) => {
    const style={
        height:"20px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"#fff",
        fontWeight:"300 !important",
        fontSize:"10px",
        letterSpacing:"1px",
    }
  return (
    <div className='footer' style={style}>
      <p>&copy;&nbsp;All Rights Reserved 2023 | Made with <span style={{color:'red'}}>❤</span> by CSE </p>
    </div>
  )
}

export default Footer 
