import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'

const Feed = () => {
  return (
    <div className='flex items-center justify-between'>
        <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
    <RefreshIcon className='h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out rotate-180 active:scale-125'/>
    </div>
  )
}

export default Feed