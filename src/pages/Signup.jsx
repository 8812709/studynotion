import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'

function Signup({setLoggedIn}) {
  return (
    <Template
    title="Join the millions learning to code with StudyNotion for free"
    desc1="build skills for,tomorrow and beyond."
    desc2="Education to future-proof your carrer."
    image={signupImg}
    formtype="signup"
    setLoggedIn={setLoggedIn}
    />
  )
}

export default Signup
