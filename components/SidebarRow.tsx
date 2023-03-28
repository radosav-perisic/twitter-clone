import React, { SVGProps } from 'react'


interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
}

function SidebarRow ({Icon, title}: Props) {
  return (
    <div className='group flex max-w-fit items-center px-4 py-3 space-x-2 rounded-full hover:bg-gray-200 transition-all duration-200'>
        <Icon className='h-6 w-6'/>
        <p className='hidden md:inline-flex group-hover:text-twitter'>{title}</p>
    </div>
  )
}

export default SidebarRow