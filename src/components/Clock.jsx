import React, { useState } from 'react'

const Clock = () => {

    let time = new Date().toLocaleTimeString();

    const [currTime,setCurrTime] = useState(time)

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCurrTime(time);
    }

    setInterval(()=>{
        UpdateTime();
    },1000)

  return (
    <div>
      <h1 className='mt-60 bg-blue-300 font-bold text-4xl text-center'>DIGITAL CLOCK</h1>
    
    <div className='mt-20 bg-cyan-100 text-center'>
        <h1 className='px-10 font-bold text-4xl whitespace-nowrap'>{currTime}</h1>
    </div>
    </div>
  )
}

export default Clock
