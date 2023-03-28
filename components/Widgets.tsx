import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

const Widgets = () => {
  return (
    <div>
        {/* Search */}
        <div className='flex items-center bg-gray-100 space-x-2 p-3 rounded-full'>
            <SearchIcon className='h-5 w-5 text-gray-500'/>
            <input type='text' placeholder='Search Twitter' className='bg-transparent flex-1 outline-none'/>
        </div>
    </div>
  )
}

export default Widgets