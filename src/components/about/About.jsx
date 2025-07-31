import React from 'react'
import Icon from '../icon/Icon'

export default function About() {
  return (
    <>
       <div className='h-screen bg-primary text-white grid grid-rows-2 justify-center items-center'>
          <div className='row-span-1 text-center mt-40'>
             <h1 className='mb-2 font-bold uppercase text-4xl'>about component</h1>
             <Icon/>
          </div>
          <div className='row-span-1 grid grid-cols-2 text-center mx-36 mb-40'>
             <p className='col-span-1 text-start me-5'>Freelancer is a free bootstrap theme created by Route.
                 The download includes the complete source files including HTML, CSS, and
                  JavaScript as well as optional SASS stylesheets for easy customization. </p>
             <p className='col-span-1 text-start ms-5'>Freelancer is a free bootstrap theme created by Route.
                 The download includes the complete source files including HTML, CSS, and
                  JavaScript as well as optional SASS stylesheets for easy customization. </p>
          </div>
       </div>
    </>
  )
}
