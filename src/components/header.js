import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Header = ({ setSearchQuery }) => {
    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
      };
  return (
    <div className='bg-[#ebf0f1] w-full rounded-2xl flex items-center gap-8 py-4 px-5 '>
        <div className='flex items-center bg-[#fff] px-2 rounded-xl text-[#b4b3b3]'>
          <input type='text' placeholder='Search...' 
          className='rounded-xl py-2 px-4 font-medium border-none outline-none'
          onChange={handleSearch} />
          <div className='text-[1.3rem] font-bold'>
            <BiSearch />
          </div>
        </div>

        <div className='flex items-center font-semibold text-[#8f8d8d]'>
          Relevance 
          <div className='text-[1.5rem]'><RiArrowDropDownLine/></div>
        </div>

        <div className='flex items-center font-semibold text-[#8f8d8d]'>
          All brands 
          <div className='text-[1.5rem]'><RiArrowDropDownLine/></div>
        </div>
      </div>
  )
}

export default Header
