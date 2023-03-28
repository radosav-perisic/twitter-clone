import React, { SVGProps } from 'react'


interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
}

function SidebarRow ({Icon, title}: Props) {
  return (
    <div>
        <Icon className='h-6 w-6'/>
        <p>{title}</p>
    </div>
  )
}

export default SidebarRow