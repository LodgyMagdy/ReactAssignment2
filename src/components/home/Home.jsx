import React from 'react'
import avatar from '../../assets/Images/avatar.SVG'
import Icon from '../icon/Icon'

export default function Home() {
  return (
    <>
      <div className='h-screen bg-primary grid grid-rows-2 justify-center items-center'>
        <div className='row-span-1 mt-36'>
          <img className='size-64 mx-auto' src={avatar} alt='avatar image'/>
        </div>
        <div className='row-span-1 text-center text-white'>
           <h1 className='mb-2 font-bold uppercase text-4xl'>start framework</h1>
            <Icon/>
           <p className='mt-2'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  )
}
