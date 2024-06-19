import React from 'react'
import { project } from '../../projectsdata.jsx'
import ProjectCards from './ProjectCards'
import "./project.css"
const Project = () => {
  return (
    <div className='main flex justify-center mt-10 mb-20' >
      <div className="maincontainer flex flex-col w-full max-w-[1024px] text-white items-center">
        <h1 className='text-[35px]  text-white'>MY Recent <span className='text-purple-700'>Works</span></h1>
        <p>Here are a few projects i have worked on recently </p>
        <div  className='flex flex-wrap gap-6 mt-[40px]'>
          {
            project.map((item,index)=>{
              return <ProjectCards id={item.id} url={item.url} title={item.title} desc={item.desc} github={item.github} demo={item.demo}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Project
