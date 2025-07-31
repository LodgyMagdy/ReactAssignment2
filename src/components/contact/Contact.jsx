import React, { useState } from 'react'
import Icon from '../icon/Icon'

export default function Contact() {
    
  const [input1, setInput1] = useState(false)
  const [input2, setInput2] = useState(false)
  const [input3, setInput3] = useState(false)
  const [input4, setInput4] = useState(false)

  return (
    <>
      <div className="h-screen text-secondary grid grid-rows-2 text-center justify-center items-center">
        <div className="row-span-1 mb-30">
          <h1 className="font-bold uppercase text-3xl">contact section</h1>
          <Icon />
        </div>

        <div className="row-span-1 mb-48">
          <div className="flex flex-col gap-5 text-start">
            
            <div className="flex flex-col">
              {input1 && <p className="text-primary ps-3">userName :</p>}
              <input
                onChange={(e) => setInput1(e.target.value !== '')}
                className="py-2 ps-3 pe-96 rounded-md outline-none border-2 border-s-white border-e-white border-t-white border-b-gray-200"
                type="text"
                placeholder="userName"
              />
            </div>

            
            <div className="flex flex-col">
              {input2 && <p className="text-primary ps-3">userAge :</p>}
              <input
                onChange={(e) => setInput2(e.target.value !== '')}
                className="py-2 ps-3 pe-96 rounded-md outline-none border-2 border-s-white border-e-white border-t-white border-b-gray-200"
                type="text"
                placeholder="userAge"
              />
            </div>

            
            <div className="flex flex-col">
              {input3 && <p className="text-primary ps-3">userEmail :</p>}
              <input
                onChange={(e) => setInput3(e.target.value !== '')}
                className="py-2 ps-3 pe-96 rounded-md outline-none border-2 border-s-white border-e-white border-t-white border-b-gray-200"
                type="text"
                placeholder="userEmail"
              />
            </div>

            
            <div className="flex flex-col">
              {input4 && <p className="text-primary ps-3">userPassword :</p>}
              <input
                onChange={(e) => setInput4(e.target.value !== '')}
                className="py-2 ps-3 pe-96 mb-3 rounded-md outline-none border-2 border-s-white border-e-white border-t-white border-b-gray-200"
                type="text"
                placeholder="userPassword"
              />
            </div>
          </div>

          
          <div className="text-start mt-6">
            <button className="active:py-1 active:px-2.5 hover:cursor-pointer rounded py-1.5 px-3 bg-primary text-white me-10">
              send Message
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
