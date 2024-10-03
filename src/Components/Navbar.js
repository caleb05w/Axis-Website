import React from 'react'
import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <div>
      <div className='flex justify-between px-[5%] py-[1%] bg-[#151515]'>
      <h6><a href='#'><b><span id='blue'>Axis</span> Consulting</b></a></h6>

      <div className='grid grid-cols-4'> 
        <h6><a href='#'>Brand</a></h6>
        <h6><a href='#'>Team</a></h6>
        <h6><a href='#'>Clients</a></h6>
        <h6><a href='#'>Get Involved</a></h6>
      </div>
      </div>
    </div>
  )
}

export default Navbar
