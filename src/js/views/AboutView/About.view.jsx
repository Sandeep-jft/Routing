import React from 'react';
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h3>About checkout</h3>
        <button onClick={()=>navigate(-1,{replace:true})}>Go back</button>
    </div>
  )
}

export default About