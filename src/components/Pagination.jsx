import React, { useEffect, useState } from 'react'

const Pagination = () => {

    const [products , setProducts] = useState([]);
    const [pages, setPages] = useState(1);

    useEffect(()=>{
        fetchProduct();
    },[])

    const fetchProduct = async() => {
        const data = await fetch('https://dummyjson.com/products?limit=100');
        const json = await data.json();
        setProducts(json.products);
    }

    const selectPageHandler = (s) => {
      setPages(s);
    }

  return (
    <div>
      <h1 className='mt-[48%] bg-blue-300 font-bold text-4xl text-center'>PAGINATION</h1>
    <div>
      {products.length > 0 && <div className='flex flex-wrap gap-6'>
        {products.slice(pages * 10 - 10,pages * 10).map((p)=>{
            return (<div key={p.id} className='m-20 bg-gradient-to-b via-transparent from-cyan-800 to-blue-400 w-80 h-80 text-center'>
                <img src={p.thumbnail} alt='prod.thumbnail' className='p-4' />
                <span className='cursor-pointer'>{p.title}</span>
            </div>
            )
        })}
      </div>}
       <div className='mx-[45%] flex justify-center gap-2 mb-16'>
        {[...Array(products.length / 10)].map((_,i)=>(
            <span 
            onClick={()=>{selectPageHandler(i+1)}}
            className='bg-gradient-to-b via-transparent from-blue-500 to-blue-400 cursor-pointer px-1'>{i+1}</span>
        ))}
       </div>
    </div>
    </div>
  )
}

export default Pagination
