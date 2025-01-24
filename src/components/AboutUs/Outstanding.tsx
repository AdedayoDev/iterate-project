import React from 'react'

const Outstanding = () => {
  return (
    <section className='w-full h-full py-12'>
      <div className='w-10/12 mx-auto space-y-6 '>
        <h2 className='font-normal text-3xl text-center font-inter text-black'>We’re the most outstanding in medical fundraising</h2>
        <div className='flex  items-center justify-center gap-3'>
            <p className='flex flex-col  items-center justify-center'>
                <span className='font-normal text-4xl text-center'>30,000 +</span>
                <span className='font-normal text-3xl text-center'>medical fundraiser per year</span>
            </p>
            <div className='h-32 w-0.5 bg-black '></div>
            <p className='flex flex-col items-center justify-center'>
            <span className='font-normal text-4xl text-center'>$150 milion +</span>
            <span className='font-normal text-3xl text-center'>raised per year</span>
            </p>
        </div>
      </div>
    </section>
  )
}

export default Outstanding
