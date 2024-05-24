import React, { useRef } from 'react'
import Card from './Card'

const Carousel = () => {

    const carouselRef = useRef(null);

    const prevHandler =()=>{
        let box = carouselRef.current;
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
    }
    const nextHandler =()=>{
        let box = carouselRef.current;
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
    }

  return (
    <div>
      <h1 className='mt-[45%] bg-blue-300 font-bold text-4xl text-center'>CAROUSEL</h1>
    
    <div id='hi' className='carousel mb-[40%] mt-8'>
        <div className='flex justify-between'>
        <button onClick={prevHandler} className='absolute mt-48'>◀</button>
        <button onClick={nextHandler} className='absolute mt-48 ml-[98%] '>▶</button>
        </div>
        <div ref={carouselRef} className='flex mx-10 overflow-x-hidden'>
        <Card cardno={1} />
        <Card cardno={2} />
        <Card cardno={3} />
        <Card cardno={4} />
        <Card cardno={5} />
        <Card cardno={6} />
        <Card cardno={7} />
        <Card cardno={8} />
        <Card cardno={9} />
        <Card cardno={10} />
        <Card cardno={11} />
        </div>
    </div>
    </div>
  )
}

export default Carousel
