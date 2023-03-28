import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'

const Feed = () => {
  return (
    <div>
        <h1>Home</h1>
    <RefreshIcon className='h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out rotate-180 active:scale-125'/>
    </div>
  )
}

export default Feed