import React from 'react'
import '../output.css'
import '../input.css' //<-- Tailwind stylesheet
import gloriousPM from '../assets/images/gloriousPM.jpg'
import justin from '../assets/images/justin.png'
import justin2 from '../assets/images/justin2.png'
import justin3 from '../assets/images/justin3.png'


function Home() {
  return (
    <div className='bg-[#151515]'> 

      <div className=" w-[80%] m-auto py-[5%]">

        <div className='grid justify-center text-center w-[50%] m-auto'>
        <h1 className=''> Personal Growth <span id='blue'> Community Impact </span></h1>
          <p className='w-[60%] mx-auto my-[5%]'>Axis Consulting is a student-led pro-bono consultancy part of Simon Fraser University.</p>
        </div>

      </div>
    </div>
)
}

export default Home
