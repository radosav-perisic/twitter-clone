import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

const Widgets = () => {
  return (
    <div>
        {/* Search */}
        <div>
            <SearchIcon className='h-5 w-5'/>
            <input type='text' placeholder='Search Twitter'/>
        </div>
    </div>
  )
}

export default Widgets