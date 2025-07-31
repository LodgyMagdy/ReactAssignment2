import React from 'react'
import Icon from '../icon/Icon'
import ImgHover from '../images with hover/ImgHover'

export default function Portfolio() {
  return (
    <>
    <div className='h-screen text-secondary grid grid-rows-2 justify-center items-center'>
        <div className='text-center mb-20'>
            <h1 className='font-bold uppercase text-4xl'>portfolio component</h1>
            <Icon/>
        </div>
        <div className='row-span-1 grid grid-cols-3 text-center gap-x-10 mb-30'>
            <ImgHover/>
        </div>
        <div className='row-span-1 grid grid-cols-3 text-center gap-x-10 mb-5'>
            <ImgHover/>
        </div>
    </div>
    </>
  )
}
