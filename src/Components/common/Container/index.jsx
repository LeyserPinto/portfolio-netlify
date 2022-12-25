import React from 'react'

const Container = ({w, h, center}) => {

  console.log(w +' '+ h)
  return (
    <div style={{width:`${w}%`,height:`${h}px`,border:'5px solid yellow', margin:center, padding:"5px"}}></div>
  )
}

export default Container