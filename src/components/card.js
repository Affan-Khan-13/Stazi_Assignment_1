import React from 'react';
import { BsPeople } from 'react-icons/bs';
import { BiGasPump } from 'react-icons/bi';
import { BsSpeedometer } from 'react-icons/bs';
import { GiSteeringWheel } from 'react-icons/gi'
import { AiOutlineHeart } from 'react-icons/ai';

const Card = ({name, year, price, img}) => {
    return (
        <div className='p-4 bg-[#ebf0f1] rounded-2xl'>
            <img src={img} className='rounded-2xl w-[27vw] h-[20rem] bg-black' />

            <div className='px-6 py-4'>
                <div className='flex justify-between items-center'>
                    <div className='text-[1.5rem] font-medium'>{name}</div>
                    <div className='w-max h-max py-1 px-3 border-dashed border-[2px] rounded-2xl border-[#455ad1]'>{year}</div>
                </div>

                <div className='grid grid-cols-2 grid-rows-2 grid-flow-row pt-3'>
                    <div className='flex items-center gap-2 p-2 font-medium'>
                        <div className='text-[#455ad1] text-[1.5rem]'>
                            <BsPeople />
                        </div>
                        4 People
                    </div>
                    <div className='flex items-center gap-2 p-2 font-medium'>
                        <div className='text-[#455ad1] text-[1.5rem]'>
                            <BiGasPump />
                        </div>
                        Hybrid
                    </div>
                    <div className='flex items-center gap-2 p-2 font-medium'>
                        <div className='text-[#455ad1] text-[1.5rem]'>
                            <BsSpeedometer />
                        </div>
                        6.1km/ 1-litre
                    </div>
                    <div className='flex items-center gap-2 p-2 font-medium'>
                        <div className='text-[#455ad1] text-[1.5rem]'>
                            <GiSteeringWheel />
                        </div>
                        Automatic
                    </div>
                </div>

                <hr className='my-4'/>

                <div className='flex justify-between items-center'>
                    <div className='text-[1.2rem] font-medium'>
                        {`$${price} / month`}
                    </div>

                    <div className='flex gap-3'>
                        <div className='w-max h-max p-2 bg-blue-200 rounded-xl text-[#455ad1] text-[1.2rem]'><AiOutlineHeart/></div>
                        <div className='w-max h-max py-2 px-4 cursor-pointer bg-[#3e5bff] text-white rounded-2xl font-medium'> Rent Now </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card
