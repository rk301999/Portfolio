import React from 'react'
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <div className='flex justify-center h-full'>
      <div className='flex flex-col gap-3'>
        <h1>Github Contributions</h1>
        <GitHubCalendar
        username="rk301999"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
      </div>
    </div>
  )
}

export default Github
