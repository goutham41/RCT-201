import React from 'react'
import OptInput from './OptInput'

const Optmain = () => {
    const handleChange = (otp:string)=>{
        console.log("Recevied",otp)
    }
  return (
    <div style={{display:"flex",justifyContent:"center"}}>

        <OptInput totalInputs={4} onChange={handleChange} />
    </div>
  )
}

export default Optmain