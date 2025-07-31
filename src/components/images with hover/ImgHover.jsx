import React from 'react'
import image1 from '../../assets/Images/port1.png'
import image2 from '../../assets/Images/port2.png'
import image3 from '../../assets/Images/port3.png'
import { useState } from 'react'

export default function ImgHover() {

  const [image, setImage] = useState(null)

  const Show = (img) => {
    setImage(img)
  }

  const Close = () => {
    setImage(null)
  }

  return (
    <>
    {image && (
        <div
          className="fixed inset-0 bg-blue-500/30 flex justify-center items-center z-50"
          onClick={Close}
        >
          <img onClick={(e) => e.stopPropagation()} src={image} alt="popup" className="max-w-3xl max-h-96" />
        </div>
      )}

    <div className="relative group w-72 h-56 col-span-1">
        <img className='h-full w-full rounded' src={image1} alt='image1' />
          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-90 group-hover:cursor-pointer transition duration-500 flex justify-center items-center rounded" onClick={() => Show(image1)}>
            <i className="fa-solid fa-plus fa-5x text-white"></i>
          </div>
    </div>
    <div className="relative group w-72 h-56 col-span-1">
        <img className='h-full w-full rounded' src={image2} alt='image2' />
          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-90 group-hover:cursor-pointer transition duration-500 flex justify-center items-center rounded" onClick={() => Show(image2)}>
            <i className="fa-solid fa-plus fa-5x text-white"></i>
          </div>
    </div>
    <div className="relative group w-72 h-56 col-span-1">
       <img className='h-full w-full rounded' src={image3} alt='image3' />
          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-90 group-hover:cursor-pointer transition duration-500 flex justify-center items-center rounded" onClick={() => Show(image3)}>
            <i className="fa-solid fa-plus fa-5x text-white"></i>
          </div>
    </div>
    </>
  )
}
