import React from 'react'
import {
    AiFillGithub,
  } from "react-icons/ai";
  import { PiPresentation } from "react-icons/pi";

const ProjectCards = ({url,title,desc,demo,github}) => {
  return (
    <div className="card my-10 bg-transparent border-2 border-black shadow-purple-800 transform transition duration-500 hover:scale-90" style={{boxShadow:"0px 2px 26px 9px rgba(96,0,133,0.6)"}}>
        <div className="content w-[495px] h-[570px] text-white flex flex-col gap-4 items-center p-7">
            <img src={url} alt="" className='w-[300px] h-[300px] rounded-full'/>
            <h1 className='text-2xl'>{title}</h1>
            <p className='text-sm italic tracking-wide'>{desc}</p>
            <div className="btn flex gap-11">
                <a href={github} target='_blank'>
                    <div className='flex items-center gap-2 bg-purple-700 p-2 rounded-lg'><AiFillGithub/>{" "}Github</div>
                    
                </a>
                {demo!="" && <a href={demo} target='_blank'><div className='flex items-center gap-2 bg-purple-700 p-2 rounded-md'><PiPresentation/>{" "}Demo</div></a>}
            </div>
        </div>
    </div>
  )
}

export default ProjectCards
