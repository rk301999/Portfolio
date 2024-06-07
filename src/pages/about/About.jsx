import React, { useEffect } from 'react'
// import Github from '../../components/github/Github'
import { FaExternalLinkAlt } from "react-icons/fa";


const About = () => {
  return (
    <>
    
    <div className='flex justify-center items-center mt-10 h-full'>
      <div className="intro  w-full max-w-[1024px] h-[80%]">
        <h1 className='flex w-full justify-center text-[55px] mb-16 text-white'>About<span className="text-purple-700">&nbsp;Me</span></h1>
      <div className="main flex gap-6">
      <div className="left" style={{ flex: "1" }}>
        <img src="Ritesh_pic.jpg" alt="" className='h-[290px]  rounded-lg '/>
      </div>
      <div className="right2 text-white " style={{ flex: "2" }}>
        <ul className=' flex flex-col gap-6 text-[16px] justify-center'>
          <li>Hello! I'm a passionate Full Stack Developer with deep curiosity and a love for solving complex challenges</li>
          <li>Whenever possible, I apply my passion for product development using Node.js , MongoDb and modern JavaScript libraries and frameworks such as React.js and Next.js</li>
          <li>Apart from Web development , i am exploring Devops and Deployment using AWS</li>
          <li>I believe that the ability to adapt is more valuable than sticking to a single technique for an extended period, embodying the philosophy that being a jack of all trades often outweighs mastering one.</li>
        </ul>
        
      </div>
      </div>

      </div>
    </div>
    {/* <Github/> */}
    <div className='flex items-center justify-center w-full text-[35px] mb-16 text-white'>
        <h1>Github <span className='text-purple-700'>Contributions</span></h1>
    </div>
    <div className='flex  flex-col items-center justify-center w-full gap-3 text-white mb-24'>
    <img src="http://ghchart.rshah.org/rk301999" alt="Ritesh Github chart" className='h-[150px] '/>
    <h1 className='text-[20px]'>Made <span className='text-purple-700 '>63</span> Contributions last year</h1>
    </div>
    <br />

    </>
  )
}

export default About
