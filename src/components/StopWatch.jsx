import React, { useState, useEffect } from 'react';

const StopWatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setTimer(prevTimer => prevTimer + 1);
            }, 1000);
        } else {
            clearInterval(intervalId);
        }

        // Cleanup interval on component unmount or if isRunning changes
        return () => clearInterval(intervalId);
    }, [isRunning]);

    return (
        <div>
            <h1 className='mt-[45%] bg-blue-300 font-bold text-4xl text-center'>STOPWATCH</h1>
        
        <div className='mx-[45%] mt-10 bg-cyan-100 mb-[45%] border-2 border-cyan-500'>
            <p className='text-center'>{timer}</p>
            <button 
                onClick={() => setIsRunning(!isRunning)}
                className='border-2 border-black px-10 py-4 mt-4 ml-4'>
                {isRunning ? "Stop" : "Start"}
            </button>
            <button 
                onClick={() => {
                    setIsRunning(false);
                    setTimer(0);
                }}
                className='border-2 border-black ml-4 mb-4 px-[37px] py-4 mt-4'>
                Reset
            </button>
        </div>
        </div>
    );
};

export default StopWatch;
