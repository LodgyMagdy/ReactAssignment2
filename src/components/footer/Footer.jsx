import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='bg-secondary h-70 flex flex-row text-center text-white justify-center items-center'>
      <div className='container'>
         <h1 className='text-3xl uppercase'>location</h1>
         <p>2215 John Daniel Drive</p>
         <p>Clark, MO 65243</p>
      </div>
      <div className='container'>
         <h1 className='text-3xl uppercase mb-3'>around the web</h1>
         <span className="fa-stack" style={{verticalAlign: 'top'}}>
            <i className="fa-regular fa-circle fa-stack-2x"></i>
            <i className="fa-brands fa-facebook"></i>
         </span>
         <span className="fa-stack" style={{verticalAlign: 'top'}}>
            <i className="fa-regular fa-circle fa-stack-2x"></i>
            <i className="fa-brands fa-twitter"></i>
         </span>
         <span className="fa-stack" style={{verticalAlign: 'top'}}>
            <i className="fa-regular fa-circle fa-stack-2x"></i>
            <i className="fa-brands fa-linkedin-in"></i>
         </span>
         <span className="fa-stack" style={{verticalAlign: 'top'}}>
            <i className="fa-regular fa-circle fa-stack-2x"></i>
            <i className="fa-solid fa-globe"></i>
         </span>
      </div>
      <div className='container'>
         <h1 className='text-3xl uppercase'>about freelancer</h1>
         <p>Freelance is a free to use, licensed Bootstrap theme created by Route </p>
      </div>
    </div>
    </>
  )
}
