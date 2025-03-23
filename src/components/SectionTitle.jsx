import React, { useState } from 'react'

export default function SectionTitle({bg, title}) {
  return (
    <div className='bg-fixed relative bg-cover h-70 w-full text-center flex justify-center items-center'
    style={{backgroundImage: `url("${bg}")`}}
    >

        <div className='absolute bg-black/50 w-full h-full'/>
        <h2 className='relative text-4xl'>{title}</h2>
    </div>
  )
}
