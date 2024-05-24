import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className='w-96 h-96 bg-gradient-to-b via-transparent from-cyan-800 to-blue-400 m-2 text-center pt-[45%] text-black'>My Card no. {props.cardno}</div>
    </div>
  )
}

export default Card
