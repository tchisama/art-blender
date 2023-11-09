import React from 'react'

type Props = {}

function Sidebar({}: Props) {
  return (
    <div className='w-[300px] bg-foreground-50 shadow-xl h-screen p-4'>
      <h1 className='text-2xl drop-shadow-md font-bold'>ArtBlender</h1>
    </div>
  )
}

export default Sidebar