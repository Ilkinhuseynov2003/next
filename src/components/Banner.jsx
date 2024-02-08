import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import "../App.css"

function Banner () {
  return (
    <div className='p-3 border-[3px] flex'>
      <div className='w-1/4'>
        <ul>
          <li className='font-normal text-lg text-[#505050]'>Automobiles</li>
          <li className='font-normal text-lg text-[#505050]'>
            Clothes and wear
          </li>
          <li className='font-normal text-lg text-[#505050]'>Home interiors</li>
          <li className='font-normal text-lg text-[#505050]'>
            Computer and tech
          </li>
          <li className='font-normal text-lg text-[#505050]'>
            Tools, equipments
          </li>
          <li className='font-normal text-lg text-[#505050]'>
            Sports and outdoor
          </li>
          <li className='font-normal text-lg text-[#505050]'>
            Animal and pets
          </li>
          <li className='font-normal text-lg text-[#505050]'>
            Machinery tools
          </li>
          <li className='font-normal text-lg text-[#505050]'>More category</li>
        </ul>
      </div>
      <div className='w-1/2 border-[2px] border-black '>
        
        
       

        <Swiper className="mySwiper">
        <SwiperSlide><img src="./img/pc.png" className='h-[100%]'  /></SwiperSlide>
        <SwiperSlide><img src="./img/velo.png" className='h-[100%]'   /></SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
















      </div>
      <div className='w-1/4'>
        <div className='w-[90%] m-auto h-[150px] bg-[#E3F0FF] rounded-md p-2 flex flex-wrap justify-center'>
          <div className='w-[90%] h-[40px] flex gap-2'>
            <div className='photo'>
              <img src='/img/photo.png' alt='' width={40} height={20} />
            </div>
            <div className='font-normal text-base text-black'>
              {' '}
              Hi, user <br />  let’s get stated
            </div>
          </div>
          <button className='w-[90%] h-[30px] bg-[#127fff] text-white font-medium text-[13px] rounded-md'>
            Join now
          </button>
          <button className='w-[90%] h-[30px] bg-white text-[#127fff] font-medium text-[13px] rounded-md'>
            Log in
          </button>
        </div>
        <div className='w-[90%] m-auto h-[95px] bg-[#F38332] mt-2 rounded-md pt-2 pl-3 '>
          <div className='w-[50%] font-normal text-base text-white'>
            Get US $10 off with a new supplier
          </div>
        </div>

        <div className='w-[90%] m-auto h-[95px] bg-[#55bdc3] mt-2 rounded-md pt-2 pl-3'>
          <div className='w-[50%] font-normal text-base text-white'>
            Send quotes with supplier preferences
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;