import React, { SVGProps } from 'react'


interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
    onClick?: () => {}
}

function SidebarRow ({Icon, title, onClick}: Props) {
  return (
    <div onClick={() => onClick?.()} className='group flex max-w-fit items-center px-4 py-3 space-x-2 rounded-full hover:bg-twitter bg-blue-300 transition-all cursor-pointer duration-200'>
        <Icon className='h-6 w-6'/>
        <p className='hidden md:inline-flex text-white text-base font-normal  lg:text-xl'>{title}</p>
    </div>
  )
}

export default SidebarRow