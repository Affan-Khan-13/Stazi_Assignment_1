import React, { useState } from 'react'
import Header from './header'
import Cars from './cars';

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className='px-8 bg-[#d8dbdb]'>
      <Header setSearchQuery={setSearchQuery}/>
      <Cars searchQuery={searchQuery}/>
    </div>
  )
}

export default Page
